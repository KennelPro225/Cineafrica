import prix from './assets/img/petit-prix.png'
import film from './assets/img/film-6.jpg'
import film1 from './assets/img/film-16.jpg'
import film2 from './assets/img/film-30.jpg'
import './assets/Landingpage.css'

function Price() {
  return (
    <div className='price-table'>
      <img src={prix} alt='Image' className='wallet-image' />
      <p className='text-price'>Tous vos meilleurs films à moindres coûts. Cliquez <a href='#'>ici</a> pour voir la grille des prix</p>

      <img src={film} alt='Image' className='Film-6' />
      <img src={film1} alt='Image' className='Film-16' />
      <img src={film2} alt='Image' className='Film-30' />

      <p className='text-cat'>Il y en a de tout genre et pour toutes les catégories</p>

    </div>
  );
}

export default Price;