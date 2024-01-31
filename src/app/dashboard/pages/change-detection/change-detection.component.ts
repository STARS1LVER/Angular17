import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => ` Change detection - ${this.frameworksSignal().name}`
  )

  public frameworksSignal = signal({
    name: 'Angular',
    release: 2016
  })

  public frameworksHasProperty = {
    name: 'Angular',
    release: 2016
  };


  constructor(){
    setTimeout(()=>{

      this.frameworksSignal.update(value => ({
        ...value,
        name: 'React'
      }))

    },3000)
  }

}
