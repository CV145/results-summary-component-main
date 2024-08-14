document.querySelector('.continue-btn').addEventListener('click', () => {
    alert('Continue button clicked!');
});

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const summaryContainer = document.querySelector('.summary-items');
        summaryContainer.innerHTML = ''; // Clear any existing content

        data.forEach(item => {
            const summaryItem = document.createElement('div');
            summaryItem.classList.add('summary-item');

            // Dynamically add a class based on the category
            summaryItem.classList.add(item.category.toLowerCase());

            summaryItem.innerHTML = `
                <div class="summary-label">
                    <img src="${item.icon}" alt="${item.category} icon">
                    <span>${item.category}</span>
                </div>
                <div class="summary-score">${item.score} / 100</div>
            `;

            summaryContainer.appendChild(summaryItem);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON:', error);
    });

