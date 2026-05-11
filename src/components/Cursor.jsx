import { useCursor } from '../hooks/useAnimations';
import './Cursor.css';

export default function Cursor() {
  useCursor();

  return (
    <>
      <div className="cursor" />
      <div className="cursor-dot" />
    </>
  );
}
