import Footer from '@/components/footer/Footer';
import TopNavigationBar from '@/components/topNavigationBar/TopNavigationBar';

export default function Home() {
  return (
    <main>
      <TopNavigationBar/>
      <div className='flex justify-center'>
        <h1>Hello Icode Web</h1>
        <Footer/>
      </div>
    </main>
  )
}
