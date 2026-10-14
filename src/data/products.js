import denim from '../assets/images/products/denim.jpg'
import jacket from '../assets/images/products/jacket.jpg'
import knitWear from '../assets/images/products/knit-wear.jpg'
import legging from '../assets/images/products/legging.jpg'
import shirt from '../assets/images/products/shirt.jpg'
import sweater from '../assets/images/products/sweater.jpg'
import trouser from '../assets/images/products/trouser.jpg'
import undergarments from '../assets/images/products/undergarments.jpg'
import wovenWear from '../assets/images/products/woven-wear.jpg'

// Product categories. `slug` matches the old site's /product-category/<slug>/ URLs.
// Blurbs are new copy (the old site had none) — edit freely.
export const productCategories = [
  { slug: 'knit-wear', name: 'Knit Wear', image: knitWear, blurb: 'T-shirts, polos and jersey basics' },
  { slug: 'sweater', name: 'Sweater', image: sweater, blurb: 'Cable, rib and fine-gauge knits' },
  { slug: 'denim', name: 'Denim', image: denim, blurb: 'Jeans, jackets and washes' },
  { slug: 'jacket', name: 'Jacket', image: jacket, blurb: 'Outerwear and lightweight layers' },
  { slug: 'woven-wear', name: 'Woven Wear', image: wovenWear, blurb: 'Dresses, tops and woven bottoms' },
  { slug: 'shirt', name: 'Shirt', image: shirt, blurb: 'Casual and formal shirting' },
  { slug: 'trouser', name: 'Trouser', image: trouser, blurb: 'Chinos, cargos and tailored pants' },
  { slug: 'legging', name: 'Legging', image: legging, blurb: 'Activewear and everyday leggings' },
  { slug: 'undergarments', name: 'Undergarments', image: undergarments, blurb: 'Innerwear and loungewear' },
]
