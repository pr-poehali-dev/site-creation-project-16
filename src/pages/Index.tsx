import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "AIR CLASSIC RETRO",
      price: "24 999",
      image:
        "https://cdn.poehali.dev/files/24b4699a-b4b4-4e99-a891-0e8b8b76b93d.png",
      featured: true,
    },
    {
      id: 2,
      name: "STREET RUNNER",
      price: "18 500",
      image: "/img/8c1f9664-0d22-4610-9e31-3e00cba2605e.jpg",
    },
    {
      id: 3,
      name: "URBAN STYLE",
      price: "21 000",
      image: "/img/439cbf06-4593-46ae-9211-6301a6c79e01.jpg",
    },
    {
      id: 4,
      name: "SPORT ELITE",
      price: "32 900",
      image: "/img/d5f943e9-cd4a-4006-836f-c7767d7aab69.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0B0F] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-[#FF6B35]">RETRO</span>
            <span className="text-white">KICKS</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#FF6B35] transition-colors">
              HOME
            </a>
            <a href="#" className="hover:text-[#FF6B35] transition-colors">
              SHOP
            </a>
            <a href="#" className="hover:text-[#FF6B35] transition-colors">
              ABOUT
            </a>
            <a href="#" className="hover:text-[#FF6B35] transition-colors">
              CONTACT
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Icon
              name="Search"
              size={20}
              className="cursor-pointer hover:text-[#FF6B35] transition-colors"
            />
            <Icon
              name="ShoppingBag"
              size={20}
              className="cursor-pointer hover:text-[#FF6B35] transition-colors"
            />
            <Icon
              name="User"
              size={20}
              className="cursor-pointer hover:text-[#FF6B35] transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                THE SHOE
                <br />
                <span className="text-[#FF6B35]">RETRO</span> CAN BE
                <br />
                FINE
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Откройте для себя коллекцию винтажных кроссовок, где
                классический стиль встречается с современным комфортом
              </p>
            </div>
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in">
              SHOP NOW
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#0EA5E9] rounded-3xl p-1">
              <div className="bg-[#0F0B0F] rounded-3xl p-8">
                <img
                  src="https://cdn.poehali.dev/files/24b4699a-b4b4-4e99-a891-0e8b8b76b93d.png"
                  alt="Featured Sneaker"
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 animate-hover-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-[#1A1A1A] border-gray-800 hover:border-[#FF6B35] transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white group-hover:text-[#FF6B35] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400">{product.price} ₽</p>
                    <Button
                      variant="outline"
                      className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Essence Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            THE ESSENCE <span className="text-[#FF6B35]">✯</span>
            <br />
            HANDCRAFTED
            <br />
            OF FOOTWEAR.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Каждая пара кроссовок создается с особым вниманием к деталям. Мы
            объединяем традиционное мастерство с инновационными технологиями,
            чтобы создать обувь, которая не только выглядит великолепно, но и
            обеспечивает непревзойденный комфорт.
          </p>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#FF6B35]">
            BEST SELLERS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Icon name="Image" size={48} className="text-gray-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#FF6B35] transition-colors">
                  Lifestyle Collection {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-[#FF6B35]">RETRO</span>
              <span className="text-white">KICKS</span>
            </div>
            <p className="text-gray-400">
              Винтажные кроссовки для современной жизни
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">SHOP</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Мужские
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Женские
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Распродажа
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">SUPPORT</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Размерная сетка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">FOLLOW US</h4>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={24}
                className="cursor-pointer hover:text-[#FF6B35] transition-colors"
              />
              <Icon
                name="Facebook"
                size={24}
                className="cursor-pointer hover:text-[#FF6B35] transition-colors"
              />
              <Icon
                name="Twitter"
                size={24}
                className="cursor-pointer hover:text-[#FF6B35] transition-colors"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RetroKicks. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
