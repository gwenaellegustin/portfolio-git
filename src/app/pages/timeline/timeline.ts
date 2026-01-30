import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  @ViewChild('canvas')
  canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;

  constructor() {}

  ngAfterViewInit() {
    window.addEventListener('resize', () => this.resizeCanvas(), false);
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvasRef.nativeElement.style.width = '100%';
    this.canvasRef.nativeElement.style.height = '1000px';
    this.canvasRef.nativeElement.width = this.canvasRef.nativeElement.offsetWidth;
    this.canvasRef.nativeElement.height = this.canvasRef.nativeElement.offsetHeight;

    this.draw();
  }

  public draw() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.beginPath();
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const fontSize = 20;
    this.ctx.font = fontSize.toString() + 'px Numans';
    const radius = 10;
    const marginTop = 20;

    this.ctx.save();

    // Main vertical line
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'butt';
    this.ctx.moveTo(centerX, 10);
    this.ctx.lineTo(centerX, height);
    this.ctx.stroke();
    this.ctx.restore();

    // Dot today
    this.ctx.beginPath();
    this.ctx.arc(centerX, marginTop, radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillText('09.06.1996: 30 years old', centerX + radius * 2, marginTop + fontSize / 4);
    this.ctx.restore();

    // Dashed lines
    this.ctx.setLineDash([2, 2]); // dotted pattern: 4px dash, 8px gap
    this.ctx.lineWidth = 1;
    let year = 2027;
    for (let y = height / 10; y <= height; y += height / 10) {
      // text
      year = year - 1;
      this.ctx.fillText(year.toString(), 10, y - 5);
      // line
      this.ctx.beginPath();
      this.ctx.moveTo(0, y); // 0.5 for crisper 1px lines on canvas
      this.ctx.lineTo(width, y);
      this.ctx.stroke();
    }

    this.ctx.setLineDash([]);
    this.ctx.restore();

    // ...

    // Draw
    this.ctx.fill();
  }
}
