import React from "react"
import Main from "../components/main"
import containerStyles from "../styles/container.module.css"

export default function Layout() {
  return (
    <Main>
    <div className={containerStyles.container}>
    <div class="left">
      <img className="avatar" src="../../profile.jpg"/>
      <h1>
        Hi! I'm Angel. I'm a data scientist and a team player.
      </h1>
    </div>

    <div class="right">
        <p>
        Lucas ipsum dolor sit amet tusken raider naboo luke dagobah grievous coruscant ackbar biggs amidala grievous. Palpatine ponda secura tatooine calrissian dagobah darth. Calrissian ventress utapau zabrak obi-wan. Jinn jawa antilles darth moff jinn hutt. Organa sidious organa mon. Hutt jar maul calamari ackbar antilles boba. Solo biggs ewok han kashyyyk. Twi'lek amidala moff darth ponda c-3p0. Wicket gamorrean fisto organa ahsoka jango wedge. Jabba lobot han wicket palpatine. Darth darth antilles antilles mon kit.

        </p>
        
        
        <p>
        Ken griffey jr cut-off jean shorts as I lay me down to sleep wonderwall destiny’s child, converse parting your hair down the middle gangsta rap jurassic park airwalk tim “the tool man” taylor. Chronic sonic the hedgehog reebok pumps ain’t no thang digital pets joey tribbiani, beavis and butthead discovery zone hush puppies chillax christina aguilera des’ree. Warheads apollo 13 keds hoodies, game boy color can’t touch this savage garden dallas cowboys lion king. Royal stewart tartan arsenio hall leggings deep blue playa.

          
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium velit et harum rem, quasi sunt quam ad sapiente dolorum, dolor facere id quidem sequi commodi. Nisi obcaecati mollitia ducimus.
        </p>

        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur debitis, vitae cupiditate error aperiam dignissimos ratione tenetur nemo officiis quisquam sed dolore? Optio exercitationem eveniet voluptatem officia mollitia illo libero?
        </p>
      
      </div>
    
     </div>
    </Main>
    
   
  )
}