import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TrackingService } from '../../../Core/services/tracking.service';
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
  size: string;
  imageUrl: string;
  isWishlisted: boolean;
}
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(private trackingService: TrackingService) {}
  viewProduct(productId: number) {
    this.trackingService.trackEvent(productId, 'view');
  }
  addToCart(productId: number) {
    this.trackingService.trackEvent(productId, 'add_to_cart');
  }
  addToWishlist(productId: number) {
    this.trackingService.trackEvent(productId, 'add_to_wishlist');
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Gaming Laptop',
      price: 1299.99,
      category: 'Electronics',
      color: 'Black',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 2,
      name: 'Smartphone Pro',
      price: 899.99,
      category: 'Electronics',
      color: 'Blue',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 249.99,
      category: 'Accessories',
      color: 'White',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 4,
      name: 'Cotton T-Shirt',
      price: 34.99,
      category: 'Clothing',
      color: 'Red',
      size: 'M',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 5,
      name: 'Slim Fit Jeans',
      price: 69.99,
      category: 'Clothing',
      color: 'Blue',
      size: 'L',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 6,
      name: 'Smart Watch',
      price: 199.99,
      category: 'Accessories',
      color: 'Black',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 7,
      name: 'Leather Backpack',
      price: 99.99,
      category: 'Accessories',
      color: 'Brown',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 8,
      name: 'Running Sneakers',
      price: 119.99,
      category: 'Clothing',
      color: 'White',
      size: 'XL',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 9,
      name: 'Tablet 10"',
      price: 599.99,
      category: 'Electronics',
      color: 'Silver',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 10,
      name: 'DSLR Camera',
      price: 999.99,
      category: 'Electronics',
      color: 'Black',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 11,
      name: 'Bluetooth Speaker',
      price: 149.99,
      category: 'Electronics',
      color: 'Red',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 12,
      name: 'Hoodie',
      price: 49.99,
      category: 'Clothing',
      color: 'Black',
      size: 'S',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 13,
      name: 'Wireless Mouse',
      price: 29.99,
      category: 'Accessories',
      color: 'Black',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 14,
      name: 'Graphic Tee',
      price: 24.99,
      category: 'Clothing',
      color: 'White',
      size: 'M',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 15,
      name: '4K Monitor',
      price: 399.99,
      category: 'Electronics',
      color: 'Black',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 16,
      name: 'Chino Pants',
      price: 59.99,
      category: 'Clothing',
      color: 'Blue',
      size: 'L',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 17,
      name: 'Portable Charger',
      price: 39.99,
      category: 'Accessories',
      color: 'Silver',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 18,
      name: 'Denim Jacket',
      price: 79.99,
      category: 'Clothing',
      color: 'Blue',
      size: 'M',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 19,
      name: 'Smart Speaker',
      price: 129.99,
      category: 'Electronics',
      color: 'White',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 20,
      name: 'Baseball Cap',
      price: 19.99,
      category: 'Accessories',
      color: 'Red',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
    {
      id: 21,
      name: 'Gaming Console',
      price: 499.99,
      category: 'Electronics',
      color: 'Black',
      size: '',
      imageUrl: 'https://fakeimg.pl/300',
      isWishlisted: false,
    },
  ];

  filteredProducts: Product[] = [...this.products];
  paginatedProducts: Product[] = [];
  categories: string[] = ['Electronics', 'Clothing', 'Accessories'];
  colors: string[] = [
    'Black',
    'Blue',
    'Red',
    'White',
    'Silver',
    'Brown',
    'Gray',
  ];
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  selectedCategory: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  searchQuery: string = '';
  sortOption: string = 'name-asc';
  currentPage: number = 1;
  pageSize: number = 9;
  totalPages: number = 1;

  // Filter collapse states
  isCategoryOpen: boolean = false;
  isPriceOpen: boolean = false;
  isColorOpen: boolean = false;
  isSizeOpen: boolean = false;
  isSearchOpen: boolean = true;
  isSortOpen: boolean = false;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let tempProducts = [...this.products];

    // Category filter
    if (this.selectedCategory) {
      tempProducts = tempProducts.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    // Color filter
    if (this.selectedColor) {
      tempProducts = tempProducts.filter(
        (product) => product.color === this.selectedColor
      );
    }

    // Size filter
    if (this.selectedSize) {
      tempProducts = tempProducts.filter(
        (product) => product.size === this.selectedSize
      );
    }

    // Price range filter
    if (this.minPrice !== null && this.minPrice >= 0) {
      tempProducts = tempProducts.filter(
        (product) => product.price >= this.minPrice!
      );
    }
    if (this.maxPrice !== null && this.maxPrice >= 0) {
      tempProducts = tempProducts.filter(
        (product) => product.price <= this.maxPrice!
      );
    }

    // Search filter
    if (this.searchQuery) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Sort
    tempProducts = this.sortProducts(tempProducts);

    this.filteredProducts = tempProducts;
    this.updatePagination();
  }

  sortProducts(products: Product[]): Product[] {
    switch (this.sortOption) {
      case 'name-asc':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return products.sort((a, b) => b.name.localeCompare(b.name));
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  get pageNumbers(): number[] {
    const maxPagesToShow = 4;
    let startPage: number;

    if (this.currentPage <= this.totalPages - 3) {
      startPage = this.currentPage;
    } else {
      startPage = Math.max(1, this.totalPages - 3);
    }

    const endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);
    const pages: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  toggleWishlist(product: Product): void {
    product.isWishlisted = !product.isWishlisted;
  }

  // Filter toggle methods
  toggleCategoryFilter(): void {
    this.isCategoryOpen = !this.isCategoryOpen;
    console.log('Category Open:', this.isCategoryOpen);
  }

  togglePriceFilter(): void {
    this.isPriceOpen = !this.isPriceOpen;
    console.log('Price Open:', this.isPriceOpen);
  }

  toggleColorFilter(): void {
    this.isColorOpen = !this.isColorOpen;
    console.log('Color Open:', this.isColorOpen);
  }

  toggleSizeFilter(): void {
    this.isSizeOpen = !this.isSizeOpen;
    console.log('Size Open:', this.isSizeOpen);
  }

  toggleSortFilter(): void {
    this.isSortOpen = !this.isSortOpen;
    console.log('Sort Open:', this.isSortOpen);
  }

  // Get arrow class based on open state
  getArrowClass(isOpen: boolean): string {
    return isOpen ? 'fa-chevron-up' : 'fa-chevron-down';
  }

  // TrackBy for performance
  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
