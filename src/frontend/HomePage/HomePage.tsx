import ProfileImage from '@/Image/home_icon.png';
import {SkillsSection} from '../SkillComponents/SkillsSection';
import {SkillsCarousel} from '../SkillComponents/SkillsCarousel';

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Ra1to code</h1>

      <img src={ProfileImage} className="ProfileImage" alt="プロフィール画像"/>

      <p>
        Ra1to codeです。普段は個人でプログラミングをYoutubeや書籍にて学習してます。<br/>
        主にHTML/CSS/Javascriptをメインに扱っており、次はGoとPythonを学習する予定です。<br/>
        趣味は筋トレです。（最近増量を頑張ってます、しんどいです）
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 className="section-subheading text-muted mb-5">私が作った作品一覧です</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">ECサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">レスポンシブサイト</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">ウェブセキュリティ</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
      </section>
        <SkillsSection />
        <SkillsCarousel />
    </div>
  );
}