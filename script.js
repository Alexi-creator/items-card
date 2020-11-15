"use strict"

document.addEventListener('DOMContentLoaded', function() {

  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        this.querySelector('.select__icon').classList.toggle('active');
    }

    function selectChoose() {
        let text = this.innerHTML,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active');
        select.querySelector('.select__icon').classList.toggle('active');
    }

  };


  select();

      
  
  let qBtn = document.querySelectorAll('.item-windows__info-btn')

  qBtn.forEach(function(elem) {
    elem.addEventListener('click', clickItemsBtn)
  })

  function clickItemsBtn() {
    let parent = this.closest('.item-windows')
    parent.querySelector('.item-windows__price, .item-windows__material, .item-windows__info-btn').classList.toggle('active')
    document.querySelector('.windows__grid').classList.toggle('active')
    parent.classList.toggle('active')
  }
  

})