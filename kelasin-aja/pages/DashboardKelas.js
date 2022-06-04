import Head from 'next/head';

import Navbar from '../components/header/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Konten from '../components/Content-kelas/Konten';
import HeaderKelas from '../components/Content-kelas/HeaderKelas';

export default function DashboardKelas() {
  const data = ["HOME","Kelas A","Kelas B", "Kelas C"];
  const dataKelas = "KELAS A";
  const konten = [
    {id : 1, title : "Quiz 1", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.", button : "Kerjakan Quiz"},
    {id : 2, title : "Video Conference", desc : "Video Conference 20/01/2022", button : "Join"},
    {id : 3, title : "Materi 1", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.", button : "Download Materi"},
    {id : 4, title : "Materi 2", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.", button : "Download Materi"},
]
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex'>
        <Sidebar data={data}/>
        <div class="flex-row mx-auto">
          <HeaderKelas data={dataKelas}/>
          {konten.map((data, dataIdx) => {
            return (
                <Konten key={dataIdx} data={data}/>
            )
          })}
          <div class="h-[80px]"></div> 
        </div>
        {/* <h1> Konten </h1> */}
      </div>
      <Footer/>
    </div>
  )
}
