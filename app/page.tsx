import { Jumbotron, H1 } from "@/app/common/typography";
import { Button } from "@/app/common/buttons";

import Hero from "./assets/hero.png";

export default function Home() {
  return (
    <>
      <section className='relative w-full py-80 bg-cover bg-[75%]' style={{ backgroundImage: `url(${Hero.src})` }}>
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative container'>
          <Jumbotron className='text-white text-center'>
            Crafted moments, <br /> one cup at a time.
          </Jumbotron>
          <H1 className='mt-4 text-white text-center'>
            Discover your perfect roast <br className='lg:hidden' /> at Luna Cafe
          </H1>
          <p className='text-center mt-8'>
            <Button color='secondary' size='large' href='#'>
              Discover Our Menu
            </Button>
          </p>
        </div>
      </section>

      <section>
        <div className='container text-justify'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vitae provident, asperiores neque officiis sed dicta laudantium voluptatibus magni
          itaque eum vero amet quas esse repellendus veritatis unde nesciunt eveniet, autem hic! Obcaecati repudiandae earum perferendis ut ducimus cum
          corrupti, alias fuga autem dolorem impedit ipsam nesciunt natus reprehenderit consectetur voluptates veniam, soluta libero incidunt veritatis?
          Doloremque reiciendis doloribus ad nesciunt praesentium voluptatem libero corrupti minima quos ipsam. Officia, in quas. Dolorum deleniti ratione
          repellendus optio dicta repellat a neque explicabo? Culpa earum iste harum recusandae debitis amet aliquam exercitationem ipsum doloribus commodi,
          architecto, tempora unde. Consectetur, nulla adipisci! Vero aspernatur minus dolor provident? At id assumenda saepe? Laborum esse placeat sint nulla
          quam culpa facilis saepe veniam mollitia ipsum. Ipsa praesentium unde asperiores, enim animi mollitia molestias facilis quo cum voluptate id dolorem
          aut aliquid deserunt rerum corrupti odio rem, ex atque eveniet ratione inventore. Ab quod alias ea officiis facilis odit reiciendis ducimus quaerat
          voluptatem? Accusantium, ex, laudantium minus ut enim amet quaerat at laborum blanditiis illo necessitatibus consectetur. Asperiores veritatis
          repellat ipsa, consequuntur numquam quo esse odio animi eligendi laborum et nostrum dolores molestias nesciunt laudantium tempora ipsam officiis sed?
          Velit, veritatis modi necessitatibus provident et, doloremque excepturi, rerum laudantium non praesentium repellat aspernatur nihil dolores corrupti
          magnam quod unde reiciendis culpa. Omnis, voluptates, possimus eius similique corrupti, consequuntur exercitationem voluptatum pariatur illo aut
          aperiam ducimus. Minus odit exercitationem dignissimos! Laudantium numquam nam voluptas iste ratione, recusandae, voluptates excepturi sint possimus
          repudiandae ipsum, dolores accusantium officiis dolor nisi sapiente ea distinctio! Eum deleniti accusamus ipsum, iure non voluptatem nobis possimus
          expedita praesentium blanditiis tempore dolor. Velit recusandae eligendi dicta minus, consequatur sed officia quia. At quas hic, repudiandae
          voluptates officiis delectus exercitationem sit quaerat, esse molestias corrupti blanditiis, iste iure ad. Doloremque at ab adipisci officiis beatae
          eveniet quisquam inventore ipsa itaque dolorem repellat magni dolores aspernatur labore alias a quis quibusdam ad placeat laborum, amet similique,
          odit perspiciatis quam? Odit quod qui corrupti, quas excepturi unde dolorum perspiciatis, quasi inventore error tenetur voluptate voluptatem sint!
          Omnis, qui illum consectetur quaerat adipisci, quidem voluptatibus doloribus incidunt hic ad beatae consequatur, perspiciatis quos enim. Enim mollitia
          amet impedit nisi harum? Dolor asperiores ullam voluptas perferendis quasi? Error necessitatibus, iste beatae fuga molestias ex eligendi nostrum
          labore saepe tenetur nam distinctio quo. Fugiat nam, minima officiis, voluptatibus provident temporibus modi nemo sint voluptas id eius odio, quas
          odit nobis veniam optio officia doloribus error. Hic fugiat natus nemo ab atque aut distinctio, tenetur, nam inventore delectus beatae dolorum maiores
          ad facilis ipsa architecto in nobis nesciunt tempora. Nihil deserunt molestiae ipsa ipsam, voluptatum laborum, repudiandae nulla et quidem, maxime
          dignissimos. Ab iste officiis hic ex nulla, consectetur corporis repellat facere. Sunt repudiandae in earum quidem, ipsum aliquam itaque, possimus
          omnis officiis, id delectus a labore rem! Consectetur qui numquam labore quaerat repellat sunt dicta modi facere temporibus veniam, cumque at
          voluptates iusto quidem quo dolor sapiente odio quod. Laudantium tempora facere vero consequuntur laborum omnis ratione sint cumque id?
        </div>
      </section>
    </>
  );
}
