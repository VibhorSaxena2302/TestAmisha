"use client";
import Image from "next/image"; // Import Image component
import Link from "next/link";
import { useState } from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
    const [rating, setRating] = useState(0); // State to store the selected rating
  
    // Function to handle rating change
    const handleRatingChange = (value) => {
      setRating(value);
    };
  
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

        {/* Summary Section */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Introduction
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          It was a cold, misty evening when Emily first heard the phone ring. Sitting alone in her small, creaky apartment on the outskirts of the city, she frowned. No one ever called her landline. In fact, she wasn't even sure it worked anymore. Hesitant, she walked toward the phone, its metallic ring growing louder and more insistent. 

She picked it up. 

"Hello?" her voice echoed in the quiet room.

No answer. Only silence. She waited for a moment longer, feeling a strange chill settle over her before hanging up. Shrugging it off as a wrong number, Emily returned to her spot on the couch and flipped through the pages of her book. 

But the phone rang again. 

This time, something was off. Emily’s heart raced as she stood frozen in place. Who could it be? She reached for the receiver with trembling hands, lifting it slowly.

"Hello?" she repeated.

A low, raspy breath filled the line. It was faint, but unmistakable. Someone was on the other end. 

          </p>
        </ItemLayout>

        {/* Stats Section */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">Readers</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Genre
            <sub className="font-semibold text-base">Horror/Thriller</sub>
          </p>
        </ItemLayout>

        {/* Image Section */}
        <ItemLayout className="col-span-full">
          <Image
            className="w-1/2 h-auto object-cover"
            src="/images/gli.jpg" // Image path from the public folder
            alt="image"
            width={200} // Adjust width
            height={100} // Adjust height
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
    <h2 className="text-xl md:text-2xl text-left w-full capitalize">
        Chapters
    </h2>
    <div className="flex flex-col gap-2">
    <Link href="/chapter-1" className="text-blue-500 hover:underline">
  Chapter 1
</Link>
<Link href="/chapter-2" className="text-blue-500 hover:underline">
  Chapter 2
</Link>
<Link href="/chapter-3" className="text-blue-500 hover:underline">
  Chapter 3
</Link>
    </div>
</ItemLayout>

        {/* Leo's Digital Garden Section with Increased Font Size */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl md:text-3xl text-left w-full capitalize">
            The Silent Caller
          </h2>
          <p className="font-light text-sm sm:text-lg md:text-xl">
          Emily’s hands trembled as she stared at the photograph. The image was grainy, but there was no mistaking the shadow of her silhouette against the window. The realization that someone had been watching her, just as the whisper on the phone had said, made her stomach twist in fear.

The phone rang again, loud and jarring. Her pulse quickened, but she knew she couldn’t ignore it. She had to find out who was tormenting her. With shaking hands, she lifted the receiver once more.

“Hello?” Her voice was barely a whisper.

This time, there was no silence. Instead, a chilling, distorted voice spoke softly, almost mockingly. “I’m closer than you think.”

Emily’s breath caught in her throat. Without thinking, she slammed the phone down, her heart racing as she backed away from the table. Her eyes darted toward the door, the window—every possible point of entry. She couldn’t stay here. Not when whoever this was knew where she lived, had been watching her. She needed to leave, now.

She hurried to pack a small bag, her hands fumbling as she threw in clothes and essentials. Just as she zipped the bag shut, a loud knock echoed through the apartment. Emily froze.

The knock came again—slow, deliberate.

Her heart thundered in her chest as she crept toward the door. She didn’t dare look through the peephole. Instead, she whispered, “Who’s there?”..................
</p>
        </ItemLayout>

        {/* Characters Section - Nested Inside */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Characters
          </h2>
            <h4>Emily</h4>
            <h4>The Silent Caller</h4>
        </ItemLayout>

        {/* Image Section */}
        <ItemLayout className="col-span-full">
          <Image
            className="w-1/2 h-auto object-cover"
            src="/images/phone.jpg" // Image path from the public folder
            alt="image"
            width={200} // Adjust width
            height={100} // Adjust height
            loading="lazy"
          />
        </ItemLayout>

        {/* Reviews Section */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Reviews
          </h2>
          <h5 className="font-light text-xs sm:text-sm md:text-base">
  Alex T. - ★★★★★ "A chilling and atmospheric story that keeps you on the edge of your seat! The suspense builds perfectly with the misty evening setting and the eerie phone call. Emily's fear is palpable and gripping. A must-read for fans of psychological thrillers!"
</h5>
<h5 className="font-light text-xs sm:text-sm md:text-base">
  Jessica M. - ★★★★☆ "The suspense and atmosphere in this story are fantastic! The mysterious phone call adds a great touch of tension. I would have loved to see a bit more about Emily’s background to deepen the emotional impact, but overall, it’s a thrilling read."
</h5>
<h5 className="font-light text-xs sm:text-sm md:text-base">
  David L. - ★★★★★ "The perfect blend of suspense and intrigue. The way the phone call escalates from a simple ring to a menacing whisper is masterful. The misty evening sets the mood wonderfully. I couldn’t put it down until I knew what happened next!"
</h5>
<h5 className="font-light text-xs sm:text-sm md:text-base">
  Nora W. - ★★★★☆ "A compelling and eerie short story with a strong sense of atmosphere. The foggy setting and the creepy phone call create a sense of dread that lingers. The ending left me wanting more, but it’s a great read for fans of suspenseful tales."
</h5>

        </ItemLayout>

        {/* Star Rating Input Layout */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
      <h2 className="text-xl md:text-2xl text-left w-full capitalize">
        Rate this Story
      </h2>
      <div className="flex items-center">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="relative flex items-center">
            <input
              type="radio"
              id={`star${star}`}
              name="rating"
              value={star}
              className="hidden"
              checked={rating === star}
              onChange={() => handleRatingChange(star)}
            />
            <label
              htmlFor={`star${star}`}
              className={`text-2xl cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
              aria-label={`${star} star`}
              aria-checked={rating === star ? "true" : "false"}
              role="radio"
              tabIndex={0}
            >
              ★
            </label>
          </div>
        ))}
      </div>
    </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
