import React from 'react'
import { db } from '../config/firebase';
import { getDocs, collection} from 'firebase/firestore';
import { useEffect, useState } from 'react'
import TenantCard from '../components/TenantCard';

function Tenants() {

  const [tenantList, setTenantList] = useState([]);
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
      <a href="/NewTenantForm"><button>ADD NEW Tenant</button></a>

     {tenantList.map((tenant) => {
        return (
          <TenantCard
          address={tenant.Address}
          size={tenant.Size}
          rent={tenant.Rent}
          />
        )
      })}
    </div>
  );
}

export default Tenants