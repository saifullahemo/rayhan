import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fogMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        ref?: React.Ref<THREE.ShaderMaterial>;
        transparent?: boolean;
        depthWrite?: boolean;
      };
    }
  }
}
