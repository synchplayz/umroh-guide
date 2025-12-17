import locations from '../data/locations.json';
import { MapPin } from 'lucide-react'; // Icon dari lucide-react

export default function Locations() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lokasi Umroh & Haji</h2>
      {Object.entries(locations).map(([kota, list]) => (
        <div key={kota}>
          <h3 className="text-xl mt-4">{kota.toUpperCase()}</h3>
          <ul className="space-y-2">
            {list.map((loc, i) => (
              <li key={i} className="flex items-center p-2 border rounded">
                <MapPin className="w-5 h-5 mr-2" />
                <div>
                  <strong>{loc.nama}</strong>: {loc.deskripsi}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
