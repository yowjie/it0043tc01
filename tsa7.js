document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container-2');
    const boxes = document.querySelectorAll('.box');
    const gapInput = document.getElementById('gap');
    const growInputs = [
        document.getElementById('grow-b1-input'),
        document.getElementById('grow-b2-input'),
        document.getElementById('grow-b3-input')
    ];

    function handleButtonClick(event) {
        const targetId = event.target.id;

        if (targetId === 'resetFlexbox') {
            container.style.flexDirection = 'row';
            container.style.justifyContent = 'flex-start';
            container.style.alignItems = 'stretch';
            container.style.gap = '0px';
            boxes.forEach(box => box.style.flexGrow = '0');
            gapInput.value = 0;
            growInputs.forEach(input => input.value = 0);
        } else if (targetId === 'direction-row') {
            container.style.flexDirection = 'row';
        } else if (targetId === 'direction-column') {
            container.style.flexDirection = 'column';
        } else if (targetId === 'start-j') {
            container.style.justifyContent = 'flex-start';
        } else if (targetId === 'center-j') {
            container.style.justifyContent = 'center';
        } else if (targetId === 'end-j') {
            container.style.justifyContent = 'flex-end';
        } else if (targetId === 'space-between') {
            container.style.justifyContent = 'space-between';
        } else if (targetId === 'space-around') {
            container.style.justifyContent = 'space-around';
        } else if (targetId === 'space-evenly') {
            container.style.justifyContent = 'space-evenly';
        } else if (targetId === 'start-a') {
            container.style.alignItems = 'flex-start';
        } else if (targetId === 'center-a') {
            container.style.alignItems = 'center';
        } else if (targetId === 'end-a') {
            container.style.alignItems = 'flex-end';
        } else if (targetId === 'setGap') {
            container.style.gap = `${gapInput.value}px`;
        } else if (targetId === 'reset') {
            boxes.forEach(box => box.style.flexGrow = '0');
            growInputs.forEach(input => input.value = 0);
        } else if (targetId === 'grow-all') {
            boxes.forEach(box => box.style.flexGrow = '1');
        } else if (targetId === 'grow-b1') {
            boxes[0].style.flexGrow = growInputs[0].value;
        } else if (targetId === 'grow-b2') {
            boxes[1].style.flexGrow = growInputs[1].value;
        } else if (targetId === 'grow-b3') {
            boxes[2].style.flexGrow = growInputs[2].value;
        }
    }

    document.querySelector('.container-1').addEventListener('click', handleButtonClick);
});
