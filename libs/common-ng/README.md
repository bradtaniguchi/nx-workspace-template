# common-ng

This library provides common Angular utilities I find I end up using a lot
in my Angular projects.

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test common-ng` to execute the unit tests.

## Running linting

Run `nx lint common-ng` to execute linting.

## Contents

### build-config

The build config module can be used to get the configuration of the current app.

Locally, its usage can be overriden to provide any configuration object. Otherwise,
the data is loaded from the given path.

**Example usage:**

#### app.module.ts

```typescript
// global/injection modules
BuildConfigModule.forRoot(
  environment.production
    ? {
        path: './build-config.json',
      }
    : {
        overrides: {
          angularVersion: '0.0.0',
          date: new Date().toISOString(),
          revision: '0.0.0',
        },
      }
),
```

#### component

```typescript
@Component({
  selector: 'nx-workspace-template-main',
  templateUrl: './main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(public configService: BuildConfigService) {}
}
```

#### template

```typescript
<mat-chip-list *ngIf="configService.buildConfig$ | ngrxPush as config">
  <mat-chip [title]="config | json"
            color="accent"
            selected>
    {{config.revision}}
  </mat-chip>
</mat-chip-list>
```

### can-deactivate

The can-deactivate guard is a service that can be used to prevent navigation away from a given component.

In the following example, this component is used as a top-level form component,
that prompts if the user is sure they want to leave if they are changes within the form.
This will prevent them from losing their work by accidentally trying to navigate away.


**Example usage:**
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


### error-handler

The error handler service can be used to parse generic errors, and handle them
according to the app's specification

**note** this service requires changes, as it currently doesn't do anything but provide
an api layer.


### http-loading

The http-loading service can be used to show a top-level loading spinner if http requests 
are being made.

TODO: examples


### logger

The logger service provides an injectable, customizable logger service.

TODO: examples


### nav

The nav sub-folder holds helper functions to work with the `Router` package.

TODO: examples


### route-loading

The route-loading service is similar to the `http-loading` service, it provides a high level
service state that can be used to know if a route is loading. It includes some "deactivate" logic, that
can be useful for situations where the "loading" can be deactivated, such as during "confirm" prompts 
during deactivate guards.



