const createTinyObject = () => {
    const object = document.createElement('div');
    object.className = 'object';
    const size = Math.random() * 10 + 5; // Size between 5px and 15px
    object.style.width = `${size}px`;
    object.style.height = `${size}px`;
    object.style.top = `${Math.random() * 100}vh`;
    object.style.left = `${Math.random() * 100}vw`;
    
    document.body.appendChild(object);

    // Remove the object after its animation is complete
    setTimeout(() => {
        object.remove();
    }, 10000); // Match duration with CSS animation
};

// Create multiple tiny objects at intervals
setInterval(createTinyObject, 1000); // Create an object every second
