import IMAGES from "../assets/images/images";

const Experience = () => {
    
    return (
        <div>
            <h2>My experience</h2>

<p>In college i learnt how to use; </p>

<div class="knowledge">

    <div class="maya">

        <h3>MAYA</h3> <a
            href="https://www.autodesk.co.uk/products/maya/overview?us_oa=dotcom-us&us_si=6d256227-35ee-40f8-91ef-1cf9b86f3370&us_pt=MAYAUL&us_at=Maya&term=1-YEAR&tab=subscription&plc=MAYA"
            target="_blank"> <img src={IMAGES.image1} alt="MAYA Logo"/>  </a>
{/* width=70 length="70" */}
    </div>

    <div class="photoshop">

        <h3>Photoshop</h3> <a
            href="https://www.adobe.com/uk/products/photoshop/landpa.html?gclid=CjwKCAjw1emzBhB8EiwAHwZZxQAHq7I5GSYK8djZYX8Who6GUj8fqaim_kwKitFyNUIokcDrjFctTBoCQk8QAvD_BwE&mv=search&mv=search&mv2=paidsearch&sdid=2XBSBWBF&ef_id=CjwKCAjw1emzBhB8EiwAHwZZxQAHq7I5GSYK8djZYX8Who6GUj8fqaim_kwKitFyNUIokcDrjFctTBoCQk8QAvD_BwE:G:s&s_kwcid=AL!3085!3!441664377297!e!!g!!photoshop!1422700211!58647953511&gad_source=1"
            target="_blank"><img src={IMAGES.image2} alt="Photoshop Logo" /></a>
            {/* width=70 length="70" */}

    </div>

    <div class="ue4">

        <h3>Unreal Engine 4</h3> <a href="https://www.unrealengine.com/en-US" target="_blank"><img src={IMAGES.image3} alt="Unreal Engine 4 logo" /> </a>
{/* width=90 length="90" */}
    </div>

</div>

<p>During my time doing an Enviromental 3D Art class in 2019.</p>

<div class="sdat">

    <p>This is a splash damage art test that I 3D modeled within MAYA and I textured using images from google within
        Photoshop. I had to pick a theme and I chose horror.</p>

        <img src={IMAGES.image4} /> 
        {/* width=300 length="300" */}


</div>
        </div>
    )
}

export default Experience;