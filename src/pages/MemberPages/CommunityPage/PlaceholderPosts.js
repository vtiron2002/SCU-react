import PfpBlack from '../../../img/Icons/profile-black.png';
import blmPic from '../../../img/blm.jpg';

const random = (n) => Math.floor(Math.random() * n);

export default new Array(3).fill('').map((_, i) => ({
  id: i + 1,
  name: 'John Doe',
  headline: 'New updates on the Black Lives Matter movement in Meriden!',
  body:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem veniam explicabo, corporis voluptatum perferendis ducimus recusandae. Magnam, ut consectetur distinctio cupiditate quae qui excepturi earum quo odio reprehenderit eligendi! Nobis ducimus velit aliquam possimus eveniet amet provident aperiam, necessitatibus temporibus, animi error repudiandae cum commodi molestiae veniam eius, nulla nemo!',
  tags: ['blm', 'blacklivesmatter'],
  time_posted: new Date('2020-06-02T22:26:29.551Z'),
  pfp: PfpBlack,
  image: blmPic,
  comments: new Array(random(10)).fill({
    pfp: PfpBlack,
    name: 'Commenter Name',
    time_commented: new Date('2020-08-02T22:26:29.551Z'),
    body: 'Awesome Work!',
  }),
}));
