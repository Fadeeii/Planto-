<script>
        const plants = [
            {
                name: "Snake Plant",
                image: "/api/placeholder/300/200",
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
                image: "/api/placeholder/300/200",
                soil: "Moisture-retaining potting mix",
                watering: "Weekly, or when leaves droop",
                light: "Low to moderate indirect light",
                fact: "Known for its air-purifying abilities"
            },
            {
                name: "Peace Lily",
                image: "/api/placeholder/300/200",
                soil: "Moisture-retaining potting mix",
                watering: "Weekly, or when leaves droop",
                light: "Low to moderate indirect light",
                fact: "Known for its air-purifying abilities"
            }
        ];

        function createPlantCards() {
            const plantGrid = document.getElementById('plantGrid');
            plants.forEach(plant => {
                const card = document.createElement('div');
                card.className = 'plant-card';
                card.innerHTML = `
                    <img src="${plant.image}" alt="${plant.name}" class="plant-image">
                    <div class="plant-name">${plant.name}</div>
                    <div class="plant-info">Watering: ${plant.watering}</div>
                `;
                card.onclick = () => showPlantDetails(plant);
                plantGrid.appendChild(card);
            });
        }

        function showPlantDetails(plant) {
            const detailsPanel = document.getElementById('detailsPanel');
            detailsPanel.style.display = 'block';
            detailsPanel.innerHTML = `
                <h2>${plant.name}</h2>
                <p><strong>Soil Type:</strong> ${plant.soil}</p>
                <p><strong>Watering Schedule:</strong> ${plant.watering}</p>
                <p><strong>Light Requirements:</strong> ${plant.light}</p>
                <p><strong>Fun Fact:</strong> ${plant.fact}</p>
            `;
            detailsPanel.scrollIntoView({ behavior: 'smooth' });
        }

        function enableNotifications() {
            if ('Notification' in window) {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        document.getElementById('notificationBanner').style.display = 'none';
                        alert('Notifications enabled! You will receive watering reminders.');
                    }
                });
            }
        }

        // Initialize the page
        createPlantCards();
    </script>
