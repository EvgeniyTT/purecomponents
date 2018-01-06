import Footer from './components/footer';
import Header from './components/header';
import Search from './components/search';
import './style.css';

window.addEventListener('load', function() {
    const footer = new Footer('footer');
    const header = new Header('header');
    const search = new Search('main');

    header.render();
    search.render()
    footer.render({ copyright: 'passed value - Copyright 2018' });
})


