```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about' legacyBehavior>
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About(){
  return(
    <h1>About Page</h1>
  );
}
```