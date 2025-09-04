export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  /** Optional CSS object-position value to control crop focus (e.g., 'center top', '50% 30%') */
  position?: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: '/1.jpg', alt: 'Gallery Image 1', title: 'Creative Design' },
  { id: 2, src: '/2.jpg', alt: 'Gallery Image 2', title: 'Modern Architecture' },
  { id: 3, src: '/3.jpg', alt: 'Gallery Image 3', title: 'Artistic Vision' },
  { id: 4, src: '/4.jpg', alt: 'Gallery Image 4', title: 'Innovative Solutions' },
  { id: 5, src: '/5.jpg', alt: 'Gallery Image 5', title: 'Digital Excellence' },
  { id: 6, src: '/6.jpg', alt: 'Gallery Image 6', title: 'Visual Storytelling' },
  { id: 7, src: '/7.jpg', alt: 'Gallery Image 7', title: 'Brand Identity' },
  { id: 8, src: '/8.jpg', alt: 'Gallery Image 8', title: 'User Experience' },
  { id: 9, src: '/9.jpg', alt: 'Gallery Image 9', title: 'Interactive Design' },
  { id: 10, src: '/10.jpg', alt: 'Gallery Image 10', title: 'Future Technology' },
];


