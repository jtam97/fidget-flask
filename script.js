class FlaskSimulator {
    constructor() {
        this.flasks = [];
        this.chargeInterval = null;
        this.rechargeRate = 5;
        this.defaultFlaskConfig = [
            "eternal_life",  // Flask 1
            "eternal_mana",      // Flask 2
            "taste_of_hate",  // Flask 3
            "dying_sun",      // Flask 4
            "quicksilver"   // Flask 5
        ];
        this.init();
    }

    init() {
        const container = document.querySelector('.flask-container');

        // Create 5 flasks using the default configuration
        for (let i = 1; i <= 5; i++) {
            const flaskWrapper = document.createElement('div');
            flaskWrapper.className = 'flask-wrapper';

            // Add the selector first
            const selector = this.createFlaskSelector(i - 1);
            selector.value = this.defaultFlaskConfig[i - 1];
            flaskWrapper.appendChild(selector);

            const durationBar = document.createElement('div');
            durationBar.className = 'duration-bar';

            const flask = document.createElement('div');
            flask.className = 'flask';
            flask.id = `flask${i}`;

            // Get the default flask data for this position
            const defaultFlaskData = flaskData.find(f => f.id === this.defaultFlaskConfig[i - 1]);

            // Create base flask layer
            const flaskBase = document.createElement('div');
            flaskBase.className = 'flask-base';
            flaskBase.style.backgroundImage = `url(${defaultFlaskData.spriteImage})`;
            flaskBase.style.backgroundPosition = defaultFlaskData.basePosition;

            // Create liquid layer
            const flaskLiquid = document.createElement('div');
            flaskLiquid.className = 'flask-liquid';
            flaskLiquid.style.backgroundImage = `url(${defaultFlaskData.spriteImage})`;
            flaskLiquid.style.backgroundPosition = defaultFlaskData.liquidPosition;

            const charges = document.createElement('div');
            charges.className = 'charges';

            flask.appendChild(flaskLiquid);
            flask.appendChild(flaskBase);
            flaskWrapper.appendChild(durationBar);
            flaskWrapper.appendChild(flask);
            flaskWrapper.appendChild(charges);
            container.appendChild(flaskWrapper);

            this.flasks.push({
                element: flask,
                durationBar: durationBar,
                charges: charges,
                liquid: flaskLiquid,
                currentCharges: defaultFlaskData.chargeCapacity,
                ...defaultFlaskData
            });
        }

        this.startChargeRegeneration();
        this.setupEventListeners();
        this.updateChargesDisplay();
        this.checkMissingAssets();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (key >= '1' && key <= '5') {
                const flaskIndex = parseInt(key) - 1;
                this.useFlask(flaskIndex);
                event.preventDefault();
            }
        });

        document.querySelectorAll('.flask').forEach((flask, index) => {
            flask.addEventListener('click', () => {
                this.useFlask(index);
            });
        });
    }

    useFlask(index) {
        const flask = this.flasks[index];
        if (flask.currentCharges >= flask.chargeUsed) {
            // Reduce charges
            flask.currentCharges -= flask.chargeUsed;
            this.updateChargesDisplay();

            // Show duration bar
            this.showDurationBar(index);
        }
    }

    showDurationBar(index) {
        const flask = this.flasks[index];
        flask.durationBar.style.transition = 'none';
        flask.durationBar.style.transform = 'scaleX(1)';

        // Force reflow
        void flask.durationBar.offsetHeight;

        flask.durationBar.style.transition = `transform ${flask.duration}s linear`;
        flask.durationBar.style.transform = 'scaleX(0)';
    }

    startChargeRegeneration() {
        this.chargeInterval = setInterval(() => {
            this.flasks.forEach(flask => {
                if (flask.currentCharges < flask.chargeCapacity) {
                    flask.currentCharges = Math.min(
                        flask.currentCharges + this.rechargeRate,
                        flask.chargeCapacity
                    );
                }
            });
            this.updateChargesDisplay();
        }, 1000);
    }

    calculateClipPercentage(currentCharges, maxCharges) {
        // Convert current charges to a percentage (0-1)
        const x = currentCharges / maxCharges;
        const y = 100 * (1 - x)
        return y;
    }

    updateChargesDisplay() {
        this.flasks.forEach((flask) => {
            flask.charges.textContent = `${flask.currentCharges}/${flask.chargeCapacity}`;
            const clipPercentage = this.calculateClipPercentage(
                flask.currentCharges,
                flask.chargeCapacity
            );
            flask.liquid.style.clipPath = `inset(${clipPercentage}% 0 0 0)`;
        });
    }

    createFlaskSelector(index) {
        const select = document.createElement('select');
        select.className = 'flask-selector';

        // Add options for each flask type
        flaskData.forEach(flask => {
            const option = document.createElement('option');
            option.value = flask.id;
            option.textContent = flask.name;
            select.appendChild(option);
        });

        // Set initial value
        select.value = flaskData[0].id;

        // Add change event listener
        select.addEventListener('change', (e) => {
            const selectedFlask = flaskData.find(f => f.id === e.target.value);
            this.updateFlaskType(index, selectedFlask);
        });

        return select;
    }

    updateFlaskType(index, newFlaskData) {
        const flask = this.flasks[index];

        // Update flask properties
        Object.assign(flask, newFlaskData);

        // Update visual elements
        flask.liquid.style.backgroundImage = `url(${newFlaskData.spriteImage})`;
        flask.liquid.style.backgroundPosition = newFlaskData.liquidPosition;
        flask.element.querySelector('.flask-base').style.backgroundImage = `url(${newFlaskData.spriteImage})`;
        flask.element.querySelector('.flask-base').style.backgroundPosition = newFlaskData.basePosition;

        // Reset charges to max
        flask.currentCharges = newFlaskData.chargeCapacity;

        // Update display
        this.updateChargesDisplay();
    }

    async checkMissingAssets() {
        const missingAssets = [];

        for (const flask of flaskData) {
            try {
                const img = new Image();
                const loadPromise = new Promise((resolve, reject) => {
                    img.onload = () => resolve(true);
                    img.onerror = () => reject(false);
                });

                img.src = flask.spriteImage;
                await loadPromise;
            } catch (error) {
                missingAssets.push({
                    name: flask.name,
                    id: flask.id,
                    path: flask.spriteImage
                });
            }
        }

        if (missingAssets.length > 0) {
            console.log('Flasks with missing assets:');
            missingAssets.forEach(flask => {
                console.log(`- ${flask.name} (${flask.id}): ${flask.path}`);
            });
        } else {
            console.log('All flask assets are present!');
        }

        return missingAssets;
    }
}

// Initialize the simulator when the page loads
window.addEventListener('load', () => {
    new FlaskSimulator();
});