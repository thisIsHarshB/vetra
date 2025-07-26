import React from 'react';
import { ChevronUp, Trash2 } from 'lucide-react';

function NoteCard() {
    return (
        <div className="card w-lg bg-base-100 shadow-xl">
            <div className="bg-base-300 rounded-t-lg p-4 flex items-center">
                <div className="flex-1">
                    <h2 className="card-title font-philosopher">
                        Note - 1
                    </h2>
                    <p className="text-xs text-base-content/60 italic mt-1">
                        Last modified: 19/10/2024, 05:30AM
                    </p>
                </div>
                <button className="btn btn-ghost btn-square btn-sm">
                    <ChevronUp />
                </button>
            </div>
            <div className="card-body p-4">
                <p className="font-mulish text-base-content/90">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsum officiis maxime necessitatibus maiores at.
                </p>
                
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex gap-2">
                        <div className="badge badge-outline badge-info">Regular</div>
                        <div className="badge badge-outline badge-info">Timepass</div>
                        <div className="badge badge-outline badge-info">Work</div>
                    </div>
                    
                    <button className="btn btn-ghost btn-square btn-sm">
                        <Trash2 className='h-5 w-5 text-error hover:opacity-80' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteCard;
