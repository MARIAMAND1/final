// Attend que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {

    // Sélectionne tous les boutons "Ajouter au panier"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Ajoute un événement clic à chaque bouton "Ajouter au panier"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Empêche le comportement par défaut du clic
            event.preventDefault();

            // Récupère les données du produit depuis le bouton
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            const quantityInput = button.parentNode.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value);

            // Vérifie si la quantité est valide
            if (quantity > 0) {
                // Calcul du prix total en fonction de la quantité
                const totalPrice = quantity * productPrice;

                // Affiche une alerte avec le récapitulatif
                alert(`Vous avez ajouté ${quantity} ${productName}(s) au panier pour un total de ${totalPrice}€.`);

                // Réinitialise la quantité à 1 pour le prochain ajout
                quantityInput.value = 1;
            } else {
                // Affiche une alerte si la quantité est invalide
                alert('Veuillez sélectionner au moins une unité.');
            }
        });
    });

    // Sélectionne tous les boutons "Ajouter aux favoris"
    const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');

    // Ajoute un événement clic à chaque bouton "Ajouter aux favoris"
    addToFavoritesButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Empêche le comportement par défaut du clic
            event.preventDefault();

            // Change la couleur du cœur en rouge pour indiquer l'ajout aux favoris
            button.style.color = 'red';

            // Affiche une alerte pour confirmer l'ajout aux favoris
            const productName = button.getAttribute('data-name');
            alert(`"${productName}" a été ajouté à vos favoris.`);
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.add-to-cart');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const product = button.closest('.product');
                const brand = product.querySelector('#brand').value;
                const model = product.querySelector('#model').value;
                const color = product.querySelector('#color').value;
                const price = product.querySelector('p').textContent;
                alert(`Produit ajouté au panier!\nMarque: ${brand}\nModèle: ${model}\nCouleur: ${color}\n${price}`);
            });
        });
    
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Merci pour votre message! Nous vous répondrons bientôt.');
        });
    });
    

});
