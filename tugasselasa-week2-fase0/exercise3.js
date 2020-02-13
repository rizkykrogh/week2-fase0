var name, character;
name = 'Mikael';
character = 'Ksatria';

if(!name) 
    {console.log('Nama harus diisi');}
else if(!character) 
    {console.log('Halo ' + name + ', Pilih peranmu untuk memulai game!')}
else
    {console.log('Selamat datang di Dunia Proxytia, ' + name);}

if(character === 'Ksatria') 
    {console.log('Halo Ksatria ' + name + ', kamu dapat menyerang dengan senjatamu!');}
else if(character === 'Tabib') 
    {console.log('Halo Tabib ' + name + ', kamu akan membantu temanmu yang terluka.');}
else if(character === 'Penyihir') 
    {console.log('Halo Penyihir ' + name + ', ciptakan keajaiban yang membantu kemenangan!');}
