import './styles.css';
import { toggleRef } from './js/theme-switch';
import { notific } from './js/notific';

import ApiService from './js/apiService';
// import debounce from 'lodash.debounce';

import LoadMoreBtn from './js/load-more-btn';
import photoGallerTpl from './templates/photo-gallery.hbs';

const formRef = document.getElementById('search-form');
const galleryContainerRef = document.querySelector('.gallery');

const apiService = new ApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

formRef.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchData);

function onSearch(event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value;

  if (apiService.query === '') {
    return notific.myAlert('Start typing your request');
  }

  loadMoreBtn.show();
  apiService.resetPage();
  clearContainer();
  fetchData();
}

function fetchData() {
  loadMoreBtn.disable();

  apiService
    .fetchData()
    .then(data => {
      appendMarkup(data);
      loadMoreBtn.enable();
      scrollToNewPics();
    })
    .catch(err => {
      notific.myError(err);
    });
}

function appendMarkup(data) {
  galleryContainerRef.insertAdjacentHTML('beforeend', photoGallerTpl(data));
}

function clearContainer() {
  galleryContainerRef.innerHTML = '';
}

function scrollToNewPics() {
  const rect = loadMoreBtn.refs.button.getBoundingClientRect();
  window.scrollTo({
    top: rect.bottom + window.pageYOffset,
    behavior: 'smooth',
  });
  console.log(rect.bottom);
}
