import React from 'react'
import { db } from '../config/firebase';
import { getDocs, collection} from 'firebase/firestore';
import { useEffect, useState } from 'react'
import TenantCard from '../components/TenantCard'
import earch from "../assets/search.png"
function Tenants() {

  const [tenantList, setTenantList] = useState([]);
  const [search, setSearch] = useState('');

  const TenantCollectionRef = collection(db, "Tenants");

  useEffect(() => {
    const getTenantList = async () => {
      try {
        const data = await getDocs(TenantCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setTenantList(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    getTenantList();
  }, [])

  return (
    <div>
      <div className='w-full h-[9vh] flex justify-between items-center p-4 bg-slate-400'>

      <div className='flex items-center'><input onChange={e=> setSearch(e.target.value)} type="text" placeholder='Search Property' className='h-[5vh] w-[35vw] rounded-l-lg'/><button className='bg-white h-[5vh] rounded-r-lg'><img src={earch} alt="" /></button></div>
      <div><a href="/NewTenantForm"><button className='px-4 py-2 bg-green-800 rounded-3xl text-white font-bold text-xl hover:scale-95'>ADD NEW Tenant</button></a></div>
      </div>
     
     {tenantList.filter((tenant) => {
          const searchLowerCase = search.toLowerCase();
          return (
            searchLowerCase === '' ||
            (tenant.Address?.toLowerCase().includes(searchLowerCase) ||
              tenant.Size?.toLowerCase().includes(searchLowerCase) ||
              tenant.Price?.toLowerCase().includes(searchLowerCase) ||
              tenant.Facility?.toLowerCase().includes(searchLowerCase)||
              tenant.OwnerName?.toLowerCase().includes(searchLowerCase)||
              tenant.Area?.toLowerCase().includes(searchLowerCase)
              )
          );
        }).map((tenant) => {
        return (
          <TenantCard
          address={tenant.Address}
          area={tenant.Area}
          ownername={tenant.OwnerName}
          size={tenant.Size}
          price={tenant.Price}
          facility={tenant.Facility}
          id={tenant.id}
          image={tenant.ImageURL}
          />
        )
      })}
    </div>
  );
}

export default Tenants