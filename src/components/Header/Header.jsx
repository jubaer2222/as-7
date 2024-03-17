import { IoPeopleCircleSharp } from "react-icons/io5";

const Header = () => {
    return (
      <header>
      
<div className="navbar bg-base-100">
<div className="navbar-start">
<div className="dropdown">
<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</div>
<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
<li><a>Item 1</a></li>
<li>
  <a>Parent</a>
 
</li>
<li><a>Item 3</a></li>
</ul>
</div>
<a className="font-bold text-3xl">Recipe Calories</a>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
<li><a>Home</a></li>

<li><a>Recipes</a></li>
<li><a>About</a></li>
<li><a>Search</a></li>
</ul>
</div>

{/* nnn */}
<div className="flex-none gap-2">
<div className="flex">
<input  type="text" placeholder="Search" className="input  bg-[#0D150B2B] border-none w-24 md:w-auto" />

<div className="">
<p className=" text-5xl"><IoPeopleCircleSharp /></p>
</div>
</div>

</div>
</div>
      

<section className="banner mt-10">

      <div className="text-white text-center">
      <h3 className="font-bold text-5xl  pt-32 ">Discover an exceptional cooking <br /> class tailored for you!</h3>
      <p className="pt-9">Uncover a bespoke culinary workshop, crafted just for you, offering personalized guidance and <br /> gourmet expertise. Elevate your cooking skills now!</p>
      </div>
      <div className="pt-12 sm:flex-col">
      <button className="btn bg-[#0BE58A] border-none rounded-full px-4 font-semibold text-lg mr-6">Explore Now</button> <button></button>
      <button className="btn glass border-none rounded-full px-6 text-white  font-semibold text-xl">Our Feedback</button> <button></button>
      </div>
</section>






</header>
    );
};

export default Header;