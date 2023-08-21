import Footer from "../sections/footer";
import Header from "../sections/header";
import Area from "./area";

type Props = {
  children: Children;
};

const Layout: Component<Props> & {
  Area: typeof Area;
} = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Area>{children}</Area>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

Layout.Area = Area;
