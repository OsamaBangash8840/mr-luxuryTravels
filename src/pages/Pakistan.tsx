import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '@/assets/home';
import {
  IoIosPhotos,
  IoMdAdd,
  IoMdClose,
} from 'react-icons/io';
import { MImage, Typography } from '@/components/common';
import { GoDot } from 'react-icons/go';
import { FaArrowRight } from 'react-icons/fa6';

// Reusable Luxury Image Placeholder
interface PlaceholderProps {
  label: string;
  sublabel?: string;
  aspect?: string;
  className?: string;
  src?: string;
  overlay?: boolean;
}

const ImagePlaceholder: React.FC<PlaceholderProps> = ({
  label,
  sublabel,
  aspect = 'aspect-[4/3]',
  className = '',
  src,
  overlay = true,
}) => {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-[#E8E2D9] group shadow-sm transition-all duration-500 hover:shadow-md ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EFEAE2] via-[#E4DDD3] to-[#D5CBC0]">
          <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm border border-[#C8BEB2] flex items-center justify-center text-primary mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <IoIosPhotos className="text-2xl text-primary/80" />
          </div>
          <span className="font-heading text-lg sm:text-xl text-primary font-medium tracking-wide">
            {label}
          </span>
          {sublabel && (
            <span className="text-xs uppercase tracking-widest text-textSecondary mt-1 font-medium">
              {sublabel}
            </span>
          )}
          <span className="mt-3 text-[11px] font-body text-primary/60 px-3 py-1 rounded-full border border-primary/20 bg-white/40">
            Image Placeholder
          </span>
        </div>
      )}

      {overlay && src && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      )}
    </div>
  );
};

export const Pakistan = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Itinerary Accordion State
  const [activeJourney, setActiveJourney] = useState<number | null>(1);

  const signatureJourneys = [
    {
      id: 1,
      number: '01',
      title: 'The Grand Pakistan Journey',
      days: '16 - 18 Days',
      type: 'Private Journey',
      destinations: 'Islamabad  ·  Taxila  ·  Lahore  ·  Southern Punjab  ·  Skardu  ·  Baltistan  ·  Hunza',
      image: Images.GrandPakistan,
      description1:
        "Our signature journey through Pakistan, and the most complete introduction to the country we offer. Beginning in Islamabad and the ancient ruins of Taxila, the route continues to Lahore for Mughal architecture and the city's celebrated food culture, before an optional extension into Southern Punjab's Sufi shrines and desert forts. The journey then turns north to Skardu and Baltistan's royal heritage, closing in Hunza among some of the finest mountain scenery in the Karakoram. Private transportation, heritage stays and expert local hosts are arranged throughout.",
      description2:
        'A single journey spanning the full breadth of Pakistan, from ancient civilisation to high mountain valley.',
    },
    {
      id: 2,
      number: '02',
      title: 'The Karakoram Escape',
      days: '12 Days',
      type: 'Private Journey',
      destinations: 'Skardu  ·  Shigar  ·  Khaplu  ·  Hunza',
      image: Images.KarakoramImg,
      description1:
        "For travellers whose primary interest is the mountains, this itinerary concentrates entirely on the north. Ten days move between Skardu, the royal forts of Shigar and Khaplu, and the valleys of Hunza, allowing genuine time in each place rather than a rushed tour between highlights. Accommodation includes some of the region's most characterful heritage properties and mountain retreats.",
      description2:
        "A focused journey through the Karakoram's landscapes, forts and valleys, without compromise on pace.",
    },
    {
      id: 3,
      number: '03',
      title: 'Royal Baltistan',
      days: '10 Days',
      type: 'Private Journey',
      destinations: 'Skardu  ·  Shigar  ·  Khaplu',
      image: Images.RoyalBaltistan,
      description1:
        "A shorter, cultural-led journey through Baltistan's royal past. Days are spent exploring Shigar Fort and Khaplu Palace, meeting local hosts and craftspeople, and taking in the scenery of the surrounding valleys at an unhurried pace. Well suited to travellers with limited time who still want a genuine sense of the region's heritage.",
      description2:
        "Baltistan's history and landscapes, distilled into a week of private travel.",
    },
    {
      id: 4,
      number: '04',
      title: 'Lahore: Heritage & Culinary Journey',
      days: '6 Days',
      type: 'Private Journey',
      destinations: 'Islamabad  ·  Taxila  ·  Lahore',
      image: Images.LahoreHeritage,
      description1:
        "A cultural introduction to Pakistan through architecture, history and food. The journey moves from Islamabad to the archaeological remains of Taxila, then to Lahore, where Mughal-era monuments, the Walled City and a private culinary itinerary form the centre of the experience. Ideal as a standalone journey or as the opening chapter of a longer Pakistan itinerary.",
      description2:
        'Pakistan`s cultural capital, explored through its history and its table.',
    },
    {
      id: 5,
      number: '05',
      title: 'Bespoke Pakistan',
      days: 'Tailor-Made',
      type: 'Any Duration',
      destinations: 'Designed Entirely Around You',
      image: Images.BespokePakistan,
      description1:
        "Some of our most memorable journeys are built from scratch: a longer stay in Hunza, a focus on photography, a private culinary trail through Lahore, or a route that reaches further into Pakistan's less-visited regions. We work with each client individually to shape a journey around their own interests and pace.",
      description2:
        'A Pakistan journey with no fixed template — only your own.',
    },
  ];

  const privateTravelFeatures = [
    {
      id: 1,
      number: '01',
      title: 'Private Transportation',
      description:
        'Every journey includes a private vehicle and driver, allowing you to move through Pakistan at your own pace rather than a fixed schedule.',
      image: Images.PrivateTransportation,
    },
    {
      id: 2,
      number: '02',
      title: 'Exceptional Stays',
      description:
        'We select accommodation for character as much as comfort — heritage forts, boutique properties and distinctive mountain retreats.',
      image: Images.ExceptionalStays,
    },
    {
      id: 3,
      number: '03',
      title: 'Expert Local Hosts',
      description:
        'Our guides bring genuine local knowledge, not simply a script, and are chosen for their ability to connect you with each place.',
      image: Images.ExpertLocalHosts,
    },
    {
      id: 4,
      number: '04',
      title: 'Personalised Itineraries',
      description:
        'No two journeys we design are identical. Duration, pace and focus are shaped around what matters to you.',
      image: Images.PersonalizedIternaries,
    },
    {
      id: 5,
      number: '05',
      title: 'Seamless Service',
      description:
        'From arrival to departure, our team manages the logistics behind the scenes, so your attention stays on the journey itself.',
      image: Images.SeamlessService,
    },
    {
      id: 6,
      number: '06',
      title: 'Local Assistance',
      description:
        'Where genuinely available, our teams remain contactable throughout your journey to support any changes or questions that arise along the way.',
      image: Images.LocalAssitance,
    },
  ];

  const signatureExperiencesRow1 = [
    {
      id: 1,
      title: 'Private Heritage Experiences',
      description:
        'Explore forts, palaces and historic cities with expert local hosts who bring their history and context to life.',
    },
    {
      id: 2,
      title: 'Karakoram Mountain Escapes',
      description:
        'Private drives and carefully planned days through some of the most striking mountain scenery in the world.',
    },
  ];

  const signatureExperiencesRow2 = [
    {
      id: 3,
      title: 'Curated Culinary Experiences',
      description:
        "Private dining and guided introductions to Pakistan's regional cuisine, from Lahori street food to Balti mountain cooking.",
    },
    {
      id: 4,
      title: 'Heritage Stays',
      description:
        'Overnight in forts and palaces that once served as royal residences, now restored as distinctive places to stay.',
    },
    {
      id: 5,
      title: 'Private Cultural Encounters',
      description:
        'Meet artisans, craftspeople and local communities whose traditions remain part of everyday life in the regions we visit.',
    },
  ];

  const signatureExperiencesRow3 = [
    {
      id: 6,
      title: 'Bespoke Mountain Adventures',
      description:
        'For clients who wish to go further: private treks, glacier walks and 4×4 excursions into more remote valleys.',
    },
    {
      id: 7,
      title: 'Photography & Scenic Journeys',
      description:
        'Itineraries shaped around light, landscape and timing, for travellers who want to capture Pakistan as much as experience it.',
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#FAFAF8] text-[#2C2420]">
      {/* 1. HERO SECTION */}
      <section className="relative w-[98%] mx-auto py-24 flex flex-col justify-end px-6 sm:px-14 pb-14 sm:pb-24 rounded-[20px] overflow-hidden">
        {/* Background Image / Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url(${Images.Karakoram})`,
          }}
        >
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">
          <Typography variant='largePara' className="inline-block ![font-family:Inter,sans-serif] text-white uppercase mb-3">
            Pakistan
          </Typography>

          <Typography variant='h1Heading' className=" text-white font-normal leading-[1.05] tracking-tight">
            A Private Journey <br className="hidden sm:inline" />
            Through the Karakoram and Beyond
          </Typography>

          <Typography variant='mainBodyPara' className='text-white mt-6'>Design Your Own Path Through the World's Highest Mountains</Typography>
          <Typography variant='mainBodyPara' className='text-white mt-6'>Pakistan remains one of the last great undiscovered territories in luxury travel  a country of ancient forts, living Sufi traditions and mountain valleys that few Western travellers have had the privilege to see. From the Mughal streets of Lahore to the glacial silence of the Karakoram, we design private journeys that move at your pace, with exceptional stays, expert local hosts and every detail considered before you arrive.</Typography>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-primary rounded-[20px] font-medium text-sm sm:text-base hover:bg-white/90 transition-all duration-300 shadow-lg cursor-pointer inline-flex items-center gap-2 group"
            >
              Design Your Private Journey
            </button> 
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 text-white border border-white rounded-[20px] text-sm sm:text-base  transition-all duration-300 shadow-lg cursor-pointer inline-flex items-center gap-2 group"
            >
              Explore Northern Pakistan
            </button>
          </div>
        </div>
      </section>

      {/* 2. AT A GLANCE: Reimagining Pakistan */}
      <section className="container mx-auto py-4 md:py-12 lg:py-28 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <Typography variant='largePara' className="![font-family:Inter,sans-serif] text-primary flex items-center gap-2">
             <GoDot size={10} color='primary'/>  Why Pakistan
            </Typography>
            <Typography variant='h2Heading' className="text-primary font-normal leading-tight">
              An Emerging Destination for the Discerning Traveller
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed pt-2">
              Pakistan sits at a rare crossroads: three of the world's great mountain ranges meet here, alongside a cultural history stretching back to the Indus Valley civilisation. Yet it remains largely untouched by mass tourism, which means a private journey through Pakistan still feels genuinely personal.
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              In the north, the Karakoram, Himalaya and Hindu Kush converge above valleys where Balti, Wakhi and Burusho communities have preserved their traditions for centuries. In the south, Mughal architecture, Sufi shrines and desert fortresses tell a different, equally compelling story.
            </Typography> 
            <Typography variant='mainBodyPara' className=" leading-relaxed">
              What draws sophisticated travellers here is not spectacle, but scale and authenticity — landscapes on a scale rarely seen elsewhere, and a warmth of hospitality that has changed little over generations. For those seeking a destination that still feels genuinely their own to discover, Pakistan offers exactly that.
            </Typography>
          </div>

          {/* Right Collage (3 Overlapping Images) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4 lg:py-14 px-4 sm:px-8">
            {/* Primary Large Center Image */}
            <div className="w-[68%] sm:w-[65%] rounded-[20px] overflow-hidden z-0">
              <MImage
                src={Images.EmergingDestination1}
                alt="Emerging Destination 1"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Overlapping Secondary Card (Top Right) */}
            <div className="absolute top-2 sm:top-4 right-0 sm:right-2 w-[38%] sm:w-[36%] rounded-[20px] overflow-hidden  z-10">
              <MImage
                src={Images.EmergingDestination2}
                alt="Emerging Destination 2"
                className="w-full h-auto object-cover block"
              />
            </div>    

            {/* Overlapping Secondary Card (Bottom Left) */}
            <div className="absolute bottom-2 sm:bottom-4 left-0 sm:left-2 w-[38%] sm:w-[36%] rounded-[20px] overflow-hidden  z-10">
              <MImage
                src={Images.EmergingDestination3}
                alt="Emerging Destination 3"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS: An Icon of the Journey */}
      <section className="container mx-auto py-4 md:py-12 lg:py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <MImage
            src={Images.NorthernImg}
            alt="Northern Pakistan"
            className="w-full h-auto object-cover block rounded-[20px]"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <Typography variant='largePara'className="![font-family:Inter,sans-serif] text-primary flex items-center gap-2">
             <GoDot size={10} color='primary'/>  Northern Pakistan
            </Typography>
            <Typography variant='h2Heading' className="text-primary font-normal leading-tight">
              The Heart of the Journey
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              If Pakistan has a centrepiece, it is the north. Gilgit-Baltistan is home to more peaks above 7,000 metres than anywhere else on earth, and the roads that link its valleys  the Karakoram Highway chief among them are journeys in their own right, winding beneath glaciers and past centuries-old forts.
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              Hunza and Skardu anchor the region, each with its own character. Hunza is softer: terraced orchards, turquoise water and a long tradition of welcoming travellers. Skardu and greater Baltistan feel wilder, closer to the mountains themselves, with royal forts at Shigar and Khaplu that once guarded trade routes into Central Asia.
            </Typography>
             <Typography variant='mainBodyPara' className="leading-relaxed">
               A week here barely scratches the surface. Most of our clients find that Northern Pakistan rewards a longer, unhurried stay time enough to move between valleys without feeling rushed, and to experience the region as something more than a checklist of viewpoints.
             </Typography>
          </div>
        </div>
      </section>

      {/* 4. THE LANDSCAPE: Where the Earth Meets the Sky */}
      <section className="container mx-auto py-4 md:py-12 lg:py-20 px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <Typography variant='largePara'className="![font-family:Inter,sans-serif] text-primary flex items-center gap-2">
             <GoDot size={10} color='primary'/>  Hunza Valley
            </Typography>
            <Typography variant='h2Heading' className="text-primary font-normal leading-tight">
              Where the Karakoram Softens
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              Hunza is often the image people carry with them after visiting Pakistan: apricot orchards against granite peaks, and villages that seem suspended between two worlds. Baltit Fort, seat of the former Mir of Hunza, rises above Karimabad with views across the valley to Rakaposhi and Ultar Sar. A short distance below, the older, more intimate Altit Fort tells a quieter version of the same story.
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              Beyond the forts, Hunza is a place to slow down. Attabad Lake, formed by a landslide in 2010, has become one of the region's most striking natural features, its water an improbable shade of blue against the surrounding rock. Further north, the village of Passu sits beneath a jagged skyline of peaks known locally as the Cathedral, with glacier walks and suspension bridges that reward those willing to explore on foot.
            </Typography>
             <Typography variant='mainBodyPara' className="leading-relaxed">
               We arrange stays in the valley's most distinctive mountain retreats, private transportation for the drive up from Gilgit, and time built into the itinerary simply to sit, walk and take the landscape in.
             </Typography>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <MImage
            src={Images.HunzaImg}
            alt="Hunza Valley"
            className="w-full h-auto object-cover block rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* 5. ACCOMMODATIONS: Retreat & Rest in Rare Splendour */}
      <section className="container mx-auto py-4 md:py-12 lg:py-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <MImage
            src={Images.SkarduImg}
            alt="Skardu Valley"
            className="w-full h-auto object-cover block rounded-[20px]"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
             <Typography variant='largePara'className="![font-family:Inter,sans-serif] text-primary flex items-center gap-2">
             <GoDot size={10} color='primary'/>  Skardu & Baltistan
            </Typography>
            <Typography variant='h2Heading' className="text-primary font-normal leading-tight">
              Curated Time in the High Mountains
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              Skardu is the gateway to some of the most dramatic scenery in Pakistan, and increasingly, the starting point for a different kind of journey — one built around Baltistan's royal heritage as much as its landscapes. Shigar Fort, now a heritage residence, and Khaplu Palace, once home to the Rajas of Khaplu, offer a rare chance to stay within the history rather than simply view it.
            </Typography>
            <Typography variant='mainBodyPara' className="leading-relaxed">
              Around Skardu, Upper Kachura Lake and the surrounding valleys provide quieter, less-visited alternatives to the region's better-known sights, while Deosai — one of the highest plateaus in the world — opens into a vast, treeless expanse used by nomadic herders each summer. Balti culture, shaped by centuries of trade across the mountains into Ladakh and Central Asia, is present throughout: in the architecture, the cuisine and the welcome extended to visitors.
            </Typography>
             <Typography variant='mainBodyPara' className="leading-relaxed">
              We treat Baltistan as a series of curated days rather than a fixed route, adjusting pace and destinations to suit how our clients prefer to travel.
             </Typography>
          </div>
        </div>
      </section>

      {/* 6. CUSTOM ITINERARY: Private Itinerary Through the High Passes */}
      <section className="container mx-auto py-4 md:py-12 lg:py-20 px-4">
        <div className="max-w-4xl mb-12">
          <Typography variant='largePara'className="![font-family:Inter,sans-serif] text-primary flex items-center !uppercase gap-2">
              Signature Luxury Journeys
            </Typography>
          <Typography variant='h2Heading' className="text-primary font-normal leading-tight my-6">
            Private Itineraries, Thoughtfully Designed
          </Typography>
        </div>

        {/* Signature Luxury Journeys Accordion */}
        <div className="space-y-4 sm:space-y-6">
          {signatureJourneys.map(item => {
            const isOpen = activeJourney === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[20px] sm:rounded-[24px] bg-[#F5F5F5] p-4 sm:p-6 md:p-8 transition-all duration-300"
              >
                {/* Accordion Header */}
                <div
                  onClick={() =>
                    setActiveJourney(isOpen ? null : item.id)
                  }
                  className="flex items-start sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-5 md:gap-6 min-w-0 flex-1">
                    {/* Number Badge */}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 font-heading rounded-full bg-[#FDFDFD] flex items-center justify-center text-primary font-heading text-base sm:text-xl md:text-2xl shrink-0 mt-0.5 sm:mt-0 shadow-2xs">
                      {item.number}
                    </div>

                    {/* Title and Meta Info */}
                    <div className="min-w-0 flex-1">
                      <Typography
                        variant="destinationTitle"
                        className="text-primary font-normal leading-snug text-lg sm:text-2xl md:text-3xl"
                      >
                        {item.title}
                      </Typography>

                      <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 text-xs sm:text-base md:text-lg text-[#806861] font-heading mt-1 leading-normal">
                        <span>{item.days}</span>
                        <span>·</span>
                        <span>{item.type}</span>
                        <span className="mx-0.5 sm:mx-1">|</span>
                        <span className="break-words">{item.destinations}</span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl md:text-3xl text-primary/80 hover:text-primary transition-colors shrink-0 mt-1 sm:mt-0"
                    aria-label={isOpen ? 'Collapse journey' : 'Expand journey'}
                  >
                    {isOpen ? <IoMdClose /> : <IoMdAdd />}
                  </button>
                </div>

                {/* Expanded Content Body */}
                {isOpen && (
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    {/* Wide Panoramic Image */}
                    <div className="w-full h-[180px] sm:h-[280px] md:h-[340px] lg:h-[380px] rounded-[14px] sm:rounded-[18px] overflow-hidden">
                      <MImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover block"
                      />
                    </div>

                    {/* Description 1 */}
                    <Typography
                      variant="mainBodyPara"
                      className="text-[#685F56] text-xs sm:text-sm md:text-[15px] leading-relaxed"
                    >
                      {item.description1}
                    </Typography>

                    {/* Description 2 */}
                    <Typography
                      variant="mainBodyPara"
                      className="text-[#7A7067] text-xs sm:text-sm md:text-[15px] leading-relaxed"
                    >
                      {item.description2}
                    </Typography>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => navigate('/contact')}
                        className="w-full sm:w-auto px-6 py-3 rounded-[18px] border border-[#624A43] text-primary text-xs sm:text-sm font-medium font-body hover:bg-white hover:border-primary transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        Enquire About This Journey
                        <span className="group-hover:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. HERITAGE & TRADITION: Dark Brown Banner (#483832) */}
      <section className="bg-[#483832] text-white py-10 md:py-12 lg:py-28 my-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Placeholder */}
            <div className="lg:col-span-5">
              <MImage
              src={Images.SouthernPunjab}
              className="w-full h-auto object-cover block rounded-[20px]"
              alt="Tomb of Shah Rukn-e-Alam"
              />
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-6">
             <Typography variant='largePara'className="![font-family:Inter,sans-serif] text-white flex items-center gap-2">
               Southern Punjab
            </Typography>
              <Typography variant='h2Heading' className="text-white font-normal leading-tight">
                An Optional Extension into Sufi and Royal Heritage
              </Typography>
              <Typography variant="mainBodyPara" className="text-white text-xs sm:text-sm md:text-[15px] leading-relaxed">
                For travellers with time to extend their journey, Southern Punjab offers a side of Pakistan rarely seen by international visitors. Multan, one of the subcontinent's oldest cities, is known for its Sufi shrines and distinctive blue-tiled architecture, while nearby Uch Sharif holds an equally significant collection of historic tombs and mosques.
              </Typography>
              <Typography variant="mainBodyPara" className="text-white text-xs sm:text-sm md:text-[15px] leading-relaxed">
                Further south, Bahawalpur reveals the region's royal history through palaces such as Noor Mahal, and the Cholistan Desert leads to Derawar Fort, its high walls rising unexpectedly from the sand. Southern Punjab is best experienced as an extension to a longer Pakistan itinerary, adding depth to the country's cultural narrative alongside the mountains of the north.
              </Typography>
              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3.5 bg-white text-primary rounded-[18px] font-medium text-sm hover:bg-white/90 transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                >
                  Add Southern Punjab To Your Journey
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIGNATURE EXPERIENCES: Discover Pakistan Differently */}
      <section className="container mx-auto py-10 md:py-12 lg:py-20 px-4">
        <div className="mb-6">
          <Typography
            variant="largePara"
            className="![font-family:Inter,sans-serif] text-primary !uppercase font-medium tracking-wider"
          >
            SIGNATURE EXPERIENCES
          </Typography>
          <Typography
            variant="h2Heading"
            className="text-primary font-normal leading-tight mt-3"
          >
            Discover Pakistan Differently
          </Typography>
        </div>

        <div className="border-b border-[#808080] mb-8 w-full" />

        <div className="space-y-6">
          {/* Row 1: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureExperiencesRow1.map(item => (
              <div
                key={item.id}
                className="rounded-[20px] bg-[#F5F5F5] p-6 sm:p-8 flex flex-col justify-start"
              >
                <Typography
                  variant="largePara"
                  className="text-primary !text-[25px] font-normal mb-3"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="navLink"
                  className="text-[#808080] text-xs sm:text-sm leading-relaxed"
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>

          {/* Row 2: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureExperiencesRow2.map(item => (
              <div
                key={item.id}
                className="rounded-[20px] bg-[#F5F5F5] p-6 sm:p-8 flex flex-col justify-start"
              >
                <Typography
                  variant="largePara"
                  className="text-primary !text-[25px] font-normal mb-3"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="navLink"
                  className="text-[#808080] text-xs sm:text-sm leading-relaxed"
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>

          {/* Row 3: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureExperiencesRow3.map(item => (
              <div
                key={item.id}
                className="rounded-[20px] bg-[#F5F5F5] p-6 sm:p-8 flex flex-col justify-start"
              >
                <Typography
                  variant="largePara"
                  className="text-primary !text-[25px] font-normal mb-3"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="navLink"
                  className="text-[#808080] text-xs sm:text-sm leading-relaxed"
                >
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EXPERIENCES ARRANGED MERELY FOR YOU (6 Cards) */}
      <div className='bg-[#F0EDED]'>
        <section className="container py-20 px-4 ">

          <div className=" mb-16 max-w-3xl">
            <Typography
              variant="largePara"
            className="!uppercase font-normal !font-inter"
          >
            The Art of Travelling Privately
          </Typography>
          <Typography variant="h2Heading" className="text-primary font-normal leading-tight mt-2">
            Thoughtfully Arranged,Quietly Delivered
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privateTravelFeatures.map(item => (
            <div
              key={item.id}
              className="rounded-[24px] border border-[#808080]/20 p-6 flex flex-col justify-start transition-all duration-300"
            >
              {/* Top Image Container */}
              <div className="w-full h-[200px] sm:h-[220px] rounded-[18px] overflow-hidden">
                {item.image ? (
                  <MImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover block"
                  />
                ) : (
                  <ImagePlaceholder
                    label={item.title}
                    aspect="aspect-auto h-full"
                    className="rounded-[18px]"
                  />
                )}
              </div>

              {/* Number */}
              <span className="text-xs sm:text-sm text-[#7A7067] font-body mt-6 mb-2 block">
                {item.number}
              </span>

              {/* Title */}
              <Typography
                variant="largePara"
                className="text-primary !text-[24px] font-normal leading-snug mb-3"
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="navLink"
                className="!text-[#808080] text-xs sm:text-sm leading-relaxed"
              >
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* 10. HEARTBEAT OF THE NATION: Minar-e-Pakistan & History */}
      <section className="container mx-auto py-4 sm:py-28 px-4 border-t border-[#EAE5DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Vertical Portrait Image */}
          <div className="lg:col-span-5">
            <MImage src={Images.MinarePakistan} alt="Minar-e-Pakistan" className="w-full h-full object-cover block" />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <Typography variant='largePara'className="![font-family:Inter,sans-serif] text-primary !uppercase flex items-center gap-2">
             <GoDot size={10} color='primary'/>  Bespoke Pakistan
            </Typography>
            <Typography variant='h2Heading' className="text-primary !font-normal leading-tight max-w-xl">
              Your Time. Your Interests. Your Journey.
            </Typography>
            <Typography
              variant="mainBodyPara"
              className=" leading-relaxed !text-[#808080]"
            >
              No two travellers see Pakistan in quite the same way, and we don't believe they should have to follow the same route. Some clients want longer in the mountains; others are drawn to the country's architecture, its food, or its more remote corners.
            </Typography>
             <Typography
              variant="mainBodyPara"
              className=" leading-relaxed !text-[#808080]"
            >
             We shape each journey around the individual: the destinations you visit, the pace you prefer, the style of accommodation that suits you, and the experiences that matter most. Adventure level, cultural depth, duration — all of it is built around your own interests, not a fixed template.
            </Typography>

            <Typography variant='destinationTitle'>This is not a package. It is a journey designed specifically for you.</Typography>
            <div className="pt-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 bg-primary text-white rounded-[18px] font-medium text-sm hover:bg-primary/90 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Design Your Private Journey
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. QUOTE / CALLOUT BANNER */}
      <section className="bg-[#F0EDED] py-24 sm:py-32 my-12 text-center px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          <Typography variant='h2Heading' className="font-heading text-primary font-normal leading-tight">
            Pakistan Is Not a <br className="hidden sm:inline" />
            Destination to Rush
          </Typography>
          <Typography variant='mainBodyPara' className="font-heading text-[#808080] max-w-5xl mx-auto ">
            Some places ask to be seen quickly. Pakistan asks the opposite  time to sit with a view of the Karakoram, to walk through a fort that has stood for centuries, to share a meal in a valley few outsiders ever reach.
          </Typography>    
          <Typography variant='mainBodyPara' className="font-heading text-[#808080] max-w-5xl mx-auto ">
            We design private journeys for travellers who want to experience Pakistan properly: at their own pace, with exceptional stays and genuine local knowledge, from the mountains of the north to the heritage cities of the south.
          </Typography>

          <div className="pt-6">
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-primary text-white rounded-full font-medium text-sm sm:text-base hover:bg-primary/90 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              Enquire About Your Private Pakistan Journey
                              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
