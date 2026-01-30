import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

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
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.resizeCanvas();
    window.addEventListener('resize', this.draw, false);
  }

  resizeCanvas() {
    console.log('resize');
    const canvasEl = this.canvasRef.nativeElement as HTMLCanvasElement;
    canvasEl.style.width = '100vw';
    canvasEl.style.height = '100vh';
    canvasEl.width = canvasEl.offsetWidth;
    canvasEl.height = canvasEl.offsetHeight;

    this.draw();
  }

  public draw() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.beginPath();

    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;

    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'butt';

    this.ctx.moveTo(centerX, 0);
    this.ctx.lineTo(centerX, height);
    this.ctx.stroke();

    this.ctx.save();

    // Dashed lines
    this.ctx.setLineDash([2, 2]); // dotted pattern: 4px dash, 8px gap
    this.ctx.lineWidth = 1;

    console.log(height);
    const start = width * 0.1;
    console.log(start);

    for (let y = start; y <= height; y += height / 3) {
      this.ctx.font = '48px serif';
      this.ctx.fillText('2026', 10, 50);
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
