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
                image: "/api/placeholder/300/200",
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

        function togglePlantDetails(index) {
            const details = document.querySelector([data-details="${index}"]);
            const currentlyExpanded = details.classList.contains('expanded');
            
            // Close all plant details
            document.querySelectorAll('.plant-details').forEach(el => {
                el.classList.remove('expanded');
            });

            // If the clicked plant wasn't expanded, expand it
            if (!currentlyExpanded) {
                details.classList.add('expanded');
            }
        }

        function renderPlants() {
            const plantsGrid = document.getElementById('plantsGrid');
            plants.forEach((plant, index) => {
                const plantCard = document.createElement('div');
                plantCard.className = 'plant-card';
                plantCard.onclick = () => togglePlantDetails(index);
                
                plantCard.innerHTML = `
                    <img src="${plant.image}" alt="${plant.name}">
                    <h2>${plant.name}</h2>
                    <p class="watering">Watering: ${plant.watering}</p>
                    <div class="plant-details" data-details="${index}">
                        <p><span class="label">Soil Type:</span> ${plant.soil}</p>
                        <p><span class="label">Light Requirements:</span> ${plant.light}</p>
                        <p><span class="label">Fun Fact:</span> ${plant.fact}</p>
                    </div>
                `;
                
                plantsGrid.appendChild(plantCard);
            });
        }

        // Initialize the app
        renderPlants();
    </script>
