const [wrapToggleBtn, changeDirectionBtn, gapBtn] = document.getElementsByClassName('cc-btn');
const flexboxdiv = document.getElementById('flex-container');

const addListenersToCCButtons = () => {
  wrapToggleBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[0];
    if (flexboxdiv.style.flexWrap === 'nowrap') {
      flexboxdiv.style.flexWrap = 'wrap';
      wrapDescription.textContent = `Value for wrap attribute: ${flexboxdiv.style.flexWrap}`;
    } else {
      flexboxdiv.style.flexWrap = 'nowrap';
      wrapDescription.textContent = `Value for wrap attribute: ${flexboxdiv.style.flexWrap}`;
    }
  });

  changeDirectionBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[1];
    if (flexboxdiv.style.flexDirection === 'row-reverse') {
      flexboxdiv.style.flexDirection = 'row';
      wrapDescription.textContent = `Value for flex-direction attribute: ${flexboxdiv.style.flexDirection}`;
    } else {
      flexboxdiv.style.flexDirection = 'row-reverse';
      wrapDescription.textContent = `Value for flex-direction attribute: ${flexboxdiv.style.flexDirection}`;
    }
  });

  gapBtn.addEventListener('click', () => {
    const wrapDescription = document.getElementsByClassName('description')[2];
    if (flexboxdiv.style.gap === '0px') {
      flexboxdiv.style.gap = '50px';
      wrapDescription.textContent = `There is ${flexboxdiv.style.gap} between items`;
    } else {
      flexboxdiv.style.gap = '0px';
      wrapDescription.textContent = `There is ${flexboxdiv.style.gap} between items`;
    }
  });
}

addListenersToCCButtons();  