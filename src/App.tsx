import './App.css'
import { Header } from './components/Header';
import { AnimalTable } from './components/AnimalTable';
import { ProtectionMethods } from './components/ProtectionMethods';
import { SustainabilityTasks } from './components/SustainabilityTasks';
import { EnvironmentImportance } from './components/EnvironmentImportance';
import { Footer } from './components/Footer';

function App()
{
  return (
    <div>
      <Header />
      <main className="container my-4">
        <AnimalTable />
        <ProtectionMethods />
        <SustainabilityTasks />
        <EnvironmentImportance />
      </main>
      <Footer />
    </div>
  );
};

export default App;
