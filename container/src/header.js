import React from 'react';
class Header extends React.Component
{
  render()
  {
    return (
      <nav class="navbar-brand">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/articles">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/help">Help</a>
        </li>
      </ul>
    </nav>
      
    )
  }
}
export default Header;