import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Trophy,
  Target,
  CheckCircle,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div>
      <ZAcademyHero />
      <ZAcademyFeatures />
      <WhyZAcademy />
      <ZAcademyUniqueness />
      <ZAcademySuccess />
      <ZAcademyFooter />
    </div>
  );
};

export default LandingPage;

const ZAcademyHero: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="tab:px-[50px] tab:py-[50px] dark:bg-background bg-primary px-[20px] max-w-[1200px] py-[30px] text-center">
        <div>
          <span className="laptopS:text-[35px] text-[30px] font-black text-white">
            Master New Skills with Expert-Led Courses
          </span>
        </div>
        <div className="mt-[20px]">
          <span className="text-[18px] text-white">
            Join Z-Academy — a selective learning platform where expert
            instructors curate motivated students through applications.
            Experience focused cohorts, deeper engagement, and real skill
            mastery. Whether you're advancing your career or exploring new
            passions, Z-Academy connects you with world-class education and a
            community of ambitious learners.
          </span>
        </div>
        <div className="mt-[30px] font-semibold text-white">
          Sign Up Now to Explore or Teach Courses
        </div>
      </div>
    </div>
  );
};

const ZAcademyFeatures: React.FC = () => {
  return (
    <div className="dark:bg-background flex w-full items-center justify-center bg-stone-100">
      <div className="max-w-[1200px]">
        <div className="dark:bg-background bg-stone-100">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center">
              <span className="text-[22px] font-bold">
                What Z-Academy Offers
              </span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-3 flex flex-col gap-[20px] pt-[30px]">
              <div>
                <FeatureCard
                  icon={<GraduationCap size={40} className="text-primary" />}
                  cardTitle="Premium Courses"
                  cardDescription="Learn from industry experts and proven instructors"
                  cardContent="Access carefully crafted courses with real-world applications, hands-on projects, and personalized feedback. Each course is designed for deep understanding and practical skill development."
                />
              </div>

              <div>
                <FeatureCard
                  icon={<Users size={40} className="text-primary" />}
                  cardTitle="Curated Cohorts"
                  cardDescription="Learn alongside motivated, like-minded students"
                  cardContent="Students apply and are selected by instructors to ensure high engagement and commitment. Collaborate, discuss, and grow together in a focused learning environment."
                />
              </div>

              <div>
                <FeatureCard
                  icon={<Trophy size={40} className="text-primary" />}
                  cardTitle="Achieve Real Results"
                  cardDescription="Higher completion rates and verifiable skill mastery"
                  cardContent="Our selective model leads to exceptional outcomes. Earn certificates, build portfolios, and gain skills that translate directly to career advancement and personal growth."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PropsFeatureCard {
  icon?: React.ReactNode;
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: string;
}

const FeatureCard: React.FC<PropsFeatureCard> = ({
  icon,
  cardTitle,
  cardDescription,
  cardContent,
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>
          <div className="mb-[10px]">{icon}</div>
          {cardTitle}
        </CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-[15px]">{cardContent}</span>
      </CardContent>
    </Card>
  );
};

const WhyZAcademy: React.FC = () => {
  return (
    <div className="dark:bg-background/95 flex w-full items-center justify-center">
      <div className="tab:px-[50px] tab:py-[50px] w-full max-w-[1200px] px-[20px] py-[30px]">
        <div className="mb-[30px] max-w-[700px]">
          <span className="text-[22px] font-bold text-primary-dark dark:text-primary">
            Why Z-Academy Is Perfect For Serious Learners and Expert Instructors
          </span>
        </div>
        <div className="tab:pl-[30px] max-w-[700px]">
          <span className="text-stone-600 dark:text-stone-100">
            Z-Academy is more than just an online course platform — it's a
            selective learning community built for real results. <br />
            Whether you're a professional upskilling or an expert sharing
            knowledge, our application-based model ensures high-quality
            interactions. <br />
            We feature courses across tech, design, business, and more — taught
            by practitioners with real experience. <br />
            Instructors create detailed course outlines, set enrollment
            criteria, and personally select students. <br />
            Learners apply with motivation and background — joining only the
            courses that match their goals. <br />
            Access structured curricula, live sessions, projects, and peer
            collaboration. <br />
            Benefit from focused discussions and meaningful instructor feedback.{" "}
            <br />
            Track progress with clear milestones and earn recognized
            certificates. <br />
            Join a community of ambitious learners and respected instructors.{" "}
            <br />
            Whether you're advancing your career or teaching what you know best,
            Z-Academy helps you achieve more. <br />
            Start learning or teaching today — and experience education that
            truly makes a difference.
          </span>
        </div>
      </div>
    </div>
  );
};

const ZAcademyUniqueness: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center border-[1px] border-primary-dark bg-primary dark:bg-primary-extra-drak">
      <div className="max-w-[1200px]">
        <div className="bg-primary dark:bg-primary-dark">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center">
              <span className="text-[22px] font-bold text-primary-dark dark:text-primary">
                What Makes Z-Academy Special
              </span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-3 flex flex-col gap-[20px] pt-[30px]">
              <div>
                <FeatureCard
                  icon={<Target size={40} className="text-primary" />}
                  cardTitle="Selective Enrollment"
                  cardDescription="Quality learners chosen by instructors"
                  cardContent="Applications ensure every cohort is filled with committed, prepared students — creating the ideal environment for deep learning and meaningful progress."
                />
              </div>

              <div>
                <FeatureCard
                  icon={<Shield size={40} className="text-primary" />}
                  cardTitle="Expert-Led & Verified"
                  cardDescription="Courses taught by real practitioners"
                  cardContent="Every instructor is vetted for expertise and teaching ability. Courses deliver proven methods, current industry knowledge, and practical insights you can apply immediately."
                />
              </div>

              <div>
                <FeatureCard
                  icon={<Zap size={40} className="text-primary" />}
                  cardTitle="High-Impact Learning"
                  cardDescription="Transformative education with real outcomes"
                  cardContent="Our model drives exceptional completion rates and skill acquisition. Students don't just watch — they engage, build, and achieve measurable growth."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ZAcademySuccess: React.FC = () => {
  return (
    <div className="dark:bg-background bg-white">
      <div className="flex w-full items-center justify-center">
        <div className="max-w-[1200px]">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center mb-[30px]">
              <span className="text-[22px] font-bold text-primary-dark dark:text-primary">
                Success Stories From Our Community
              </span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-2 flex flex-col gap-[30px]">
              <div>
                <SuccessMetricCard
                  icon={<TrendingUp size={40} className="text-green-600" />}
                  metric="90%+"
                  description="Average course completion rate"
                  details="Students in selective cohorts finish what they start — far above industry averages."
                />
              </div>

              <div>
                <SuccessMetricCard
                  icon={<Globe size={40} className="text-blue-600" />}
                  metric="50k+"
                  description="Active learners and instructors worldwide"
                  details="A growing global community of ambitious professionals and expert mentors."
                />
              </div>

              <div>
                <SuccessMetricCard
                  icon={<Lightbulb size={40} className="text-yellow-600" />}
                  metric="500+"
                  description="Premium courses across disciplines"
                  details="From development and design to business and creative skills — all expert-led."
                />
              </div>

              <div>
                <SuccessMetricCard
                  icon={<CheckCircle size={40} className="text-primary" />}
                  metric="98%"
                  description="Learners recommend Z-Academy"
                  details="Students and instructors consistently praise the focused, high-quality experience."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PropsSuccessMetricCard {
  icon?: React.ReactNode;
  metric?: string;
  description?: string;
  details?: string;
}

const SuccessMetricCard: React.FC<PropsSuccessMetricCard> = ({
  icon,
  metric,
  description,
  details,
}) => {
  return (
    <div className="p-6 border border-stone-200 dark:border-stone-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <div className="ml-4">
          <div className="text-2xl font-bold text-primary-dark dark:text-primary">
            {metric}
          </div>
          <div className="text-sm font-semibold text-stone-600 dark:text-stone-300">
            {description}
          </div>
        </div>
      </div>
      <p className="text-sm text-stone-500 dark:text-stone-400">{details}</p>
    </div>
  );
};

const ZAcademyFooter: React.FC = () => {
  return (
    <footer className="bg-(--brand-color-extra-dark) text-stone-50">
      <div className="tab:px-[50px] tab:py-[50px] mx-auto flex w-full max-w-[1200px] flex-col gap-[40px] px-[20px] py-[40px] md:flex-row md:justify-between">
        {/* Column 1: Brand */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold text-white">Z-Academy</h2>
          <p className="mt-3 text-sm text-stone-300">
            The selective learning platform connecting expert instructors with
            motivated students for transformative education.
          </p>
        </div>

        {/* Column 2: Platform */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Platform</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Browse Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Become an Instructor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                How It Works
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Community */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Community</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                For Learners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                For Instructors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Support</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-stone-600 py-[20px] text-center text-sm text-stone-400">
        © {new Date().getFullYear()} Z-Academy. Empowering learners and
        instructors to achieve more.
      </div>
    </footer>
  );
};
