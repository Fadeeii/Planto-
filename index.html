<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Plant Care Guide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(to bottom, #e8f5e9, #c8e6c9);
            min-height: 100vh;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .header h1 {
            color: #2e7d32;
        }

        .notification-banner {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .plant-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .plant-card {
            background: white;
            border-radius: 8px;
            padding: 15px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .plant-card:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
        }

        .plant-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        .plant-name {
            color: #2e7d32;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .plant-info {
            color: #666;
            margin-bottom: 5px;
        }

        .details-panel {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            display: none;
        }

        .enable-notifications {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }

        .enable-notifications:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Planto🍃</h1>
        <p>Your simple plant care companion</p>
    </div>

    <div class="notification-banner" id="notificationBanner">
        <p>Would you like to receive watering reminders?</p>
        <button class="enable-notifications" onclick="enableNotifications()">Sure!</button>
    </div>

    <div class="plant-grid" id="plantGrid"></div>

    <div class="details-panel" id="detailsPanel"></div>

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
</body>
</html>
