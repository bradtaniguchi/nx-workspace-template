# common-ng

This library provides common Angular utilities I find I end up using a lot
in my Angular projects.

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test common-ng` to execute the unit tests.

## Running linting

Run `nx lint common-ng` to execute linting.

## Contents

### can-deactivate

The can-deactivate guard is a service that can be used to prevent navigation away from a given component.

In the following example, this component is used as a top-level form component,
that prompts if the user is sure they want to leave if they are changes within the form.
This will prevent them from losing their work by accidentally trying to navigate away.

Example usage:

#### Component Code

```typescript
@Component({
  selector: 'app-my-form-component',
  templateUrl: './my-form-component.component.html',
  styleUrls: ['./my-form-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFormComponent implements DeactivatableComponent {
  //...

  /**
   * Prompts if the user is sure they want to navigate away from the current page,
   * and thus cancel the creation of their form data?
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasChanges$.pipe(
      mergeMap((url) =>
        this.confirmDialog
          .open({
            title: 'Are you sure?',
            message: 'Are you sure you want to cancel creating stuff?',
          })
          .pipe(take(1))
      )
    );
  }

  //...
}
```

#### Router module

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@nx-workspace-template/common-ng/can-deactivate.guard';
import { MyFormComponent } from './my-form-component.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyFormComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UserRegRoutingModule {}
```
