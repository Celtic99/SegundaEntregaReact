import React from 'react';
import Logo from '../Logo';
import CardWidget from '../CardWidget';
import {Link} from 'react-router-dom';

const NavBarr = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"><Logo/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Novedades</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Teclados</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Pantallas</Link>
        </li>
      </ul>
      <ul class= "navbar-nav mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link" href="#"><CardWidget/></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBarr
