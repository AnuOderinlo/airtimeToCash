import {Link } from 'react-router-dom';
export default function NotFound() {
return (
<div>
<h1>404</h1>
<p>Page not found</p>
<Link to="/">Back to Homepage</Link>
<h1 class="text-center ">404</h1>
<img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404" />
</div>
);
}