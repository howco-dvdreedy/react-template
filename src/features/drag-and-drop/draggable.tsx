import React from 'react';
import { useDraggable } from '@dnd-kit/core';

type DraggableProps = {
   id: string;
   children: React.ReactNode;
};

export default function Draggable({ children, id }: DraggableProps) {
   const { attributes, listeners, setNodeRef } = useDraggable({
      id: id,
   });
   const style = {
      color: 'white',
   };

   return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
         {children}
      </div>
   );
}
