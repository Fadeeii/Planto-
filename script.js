<script>
        const plants = [
            {
                name: "Snake Plant",
                image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
                soil: "Well-draining potting mix",
                watering: "Every 2-8 weeks",
                light: "Low to bright indirect light",
                fact: "Can survive in very low light conditions and helps purify indoor air"
            },
            {
                name: "Monstera",
                image: "https://m.media-amazon.com/images/I/71w2o1N-VmL.jpg",
                soil: "Rich, well-draining potting mix",
                watering: "Weekly in growing season",
                light: "Bright indirect light",
                fact: "Named 'deliciosa' for its edible fruit that tastes like a mix of pineapple and banana"
            },
            {
                name: "Peace Lily",
                image: "https://seed2plant.in/cdn/shop/files/SPR-variegated-peace-lily-domino-7097188-hero-A-422d7faa152d42d3a4030ff8a2a33768.jpg?v=1692362762",
                soil: "Moisture-retaining potting mix",
                watering: "Weekly, or when leaves droop",
                light: "Low to moderate indirect light",
                fact: "Known for its air-purifying abilities"
            },
            {
                name: "Mango",
                image: "https://i.pinimg.com/564x/37/f8/9e/37f89ece0acb1fc5e9b20ef8765a8516.jpg",
                soil: "Loamy alluvial, well-drained, aerated and deep soil",
                watering: "About 10-20 litres of water when young. Once mature, it requires deep watering every 7-15 days",
                light: "6-8 hours of sunlight required",
                fact: "Reduce watering after fruiting to improve sweetness. Use micronutrients like zinc and boron to prevent deficiencies."
            },
            {
                name: "Neem",
                image: "https://media.istockphoto.com/id/1503279000/photo/new-top-leaf-of-neem-plant.jpg?s=612x612&w=0&k=20&c=vOqbxvWI4rPOTssaIADjrzamH965UsKt9MUDiWrcF6o=",
                soil: "Well-drained sandy or loamy soil",
                watering: "Once every 5–7 days (young trees need more frequent watering)",
                light: "Full sun",
                fact: "Neem is a natural pesticide and medicinal plant, often used in skincare and agriculture."
            },
            {
                name: "Rose",
                image: "https://m.media-amazon.com/images/I/71K49O0ZrAL.jpg",
                soil: "Well-drained loamy soil rich in organic matter",
                watering: "Early morning, 2–3 times a week (daily in hot weather)",
                light: "6–8 hours of direct sunlight",
                fact: "Deadheading (removing faded flowers) encourages continuous blooming."
            },
            {
                name: "Maple",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrLKHf1AzwAflJ4SQNJHkY2MgJeiubEWuNg&s",
                soil: "Moist, well-drained loamy soil",
                watering: "Daily in summer; every 2–3 days in winter",
                light: "Partial to full sun (4–6+ hours)",
                fact: "Maple trees produce sap, which is used to make maple syrup."
            },
            {
                name: "Hibiscus",
                image: "https://images-cdn.ubuy.co.in/655b4c4d14be8218756e1dea-hawaiian-red-hibiscus-plant-cutting.jpg?v=1692362762",
                soil: "Well-drained sandy or loamy soil",
                watering: "Daily in summer; every 2–3 days in winter",
                light: "6–8 hours of direct sunlight",
                fact: "Hibiscus flowers are used in herbal teas and hair care products."
            },
            {
                name: "Marigold",
                image: "https://t3.ftcdn.net/jpg/08/59/13/82/360_F_859138262_yT6PxBmm2ciG6orReg19H8oqSPGTPXAJ.jpg",
                soil: "Well-drained sandy or loamy soil",
                watering: "Every 2–3 days",
                light: "6-8 hours of direct sunlight required",
                fact: "Marigolds repel pests and are often used in companion planting."
            },
            {
                name: "Coconut",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VMjRozKMaFzNWObI8q6uvCvDNVkHRLgjoA&s",
                soil: "Well-drained sandy or loamy soil",
                watering: "Every 2–3 days for young trees; mature trees need deep watering weekly",
                light: "Full sun (at least 6 hours)",
                fact: "Every part of the coconut tree is useful, earning it the name Tree of Life."
            },
            {
                name: "Lemon",
                image: "https://i.pinimg.com/236x/ee/93/f0/ee93f022d96b8ae1119cc472ce92f44e.jpg",
                soil: "Well-drained sandy or loamy soil",
                watering: "Every 2–3 days for young plants; weekly for mature trees",
                light: "Full sun (6–8 hours)",
                fact: "Lemon trees can produce fruit all year round in warm climates."
            },
            {
                name: "Tulsi",
                image: "https://i.pinimg.com/236x/bf/58/96/bf5896dc6968b3f82e24de4b03791e8e.jpg",
                soil: "Well-drained sandy or loamy soil",
                watering: "Every 1–3 days",
                light: "4-6 hours of direct sunlight",
                fact: "Tulsi is considered sacred in India and has medicinal benefits, including boosting immunity."
            }
        ];

        function enableNotifications() {
            if ('Notification' in window) {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        document.getElementById('notificationCard').classList.add('hidden');
                        alert('Notifications enabled! You will receive watering reminders.');
                    }
                });
            }
        }

        function openModal(plant) {
            const modalOverlay = document.getElementById('modalOverlay');
            const modalTitle = document.querySelector('.modal-title');
            const modalContent = document.querySelector('.modal-content');

            modalTitle.textContent = plant.name;
            modalContent.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}">
                <p><span class="label">Watering:</span> ${plant.watering}</p>
                <p><span class="label">Soil Type:</span> ${plant.soil}</p>
                <p><span class="label">Light Requirements:</span> ${plant.light}</p>
                <p><span class="label">Fun Fact:</span> ${plant.fact}</p>
            `;

            modalOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modalOverlay = document.getElementById('modalOverlay');
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function renderPlants() {
            const plantsGrid = document.getElementById('plantsGrid');
            plants.forEach((plant, index) => {
                const plantCard = document.createElement('div');
                plantCard.className = 'plant-card';
                plantCard.onclick = () => openModal(plant);
                
                plantCard.innerHTML = `
                    <img src="${plant.image}" alt="${plant.name}">
                    <h2>${plant.name}</h2>
                    <p class="watering">Watering: ${plant.watering}</p>
                `;
                
                plantsGrid.appendChild(plantCard);
            });a
        }

        // Close modal when clicking outside
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Initialize the app
        renderPlants();
    </script>
