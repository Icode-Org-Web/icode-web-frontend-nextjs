import Contact from '@/Pages/Contact';
import Footer from '@/components/footer/Footer';
import TopNavigationBar from '@/components/topNavigationBar/TopNavigationBar';

export default function Home() {
  return (
    <main>
      <TopNavigationBar/>
      <div className='flex justify-center'>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}
