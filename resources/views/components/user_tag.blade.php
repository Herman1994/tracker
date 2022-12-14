@props([
    'style'         => '',
    'anon'          => true,
    'appendedIcons' => '',
    'user'          => (object) [
        'username' => __('common.anonymous'),
        'id'       => null,
        'group'    => (object) [
            'icon'   => '',
            'color'  => 'inherit',
            'effect' => 'none',
            'name'   => '',
],
    ]
])

@if ($anon)
    @if (auth()->user()->id === $user->id || auth()->user()->group->is_modo)
        <span
            {{ $attributes->class('chip--user fas fa-eye-slash') }}
            {{ $attributes->merge(['style' => 'background-image: '.$user->group->effect.';'.$style]) }}
        >
            (
            <a
                class="chip--user__link chip--anonymous__link {{ $user->group->icon }}"
                href="{{ route('users.show', ['username' => $user->username]) }}"
                style="color: {{ $user->group->color }}"
                title="{{ $user->group->name }}"
            >
                {{ $user->username }}
            </a>
            {{ $appendedIcons }}
            )
        </span>
    @else
        <span
            {{ $attributes->class('chip--user fas fa-eye-slash') }}
        >
            ({{ __('common.anonymous') }})
        </span>
    @endif
@else
    <span
        {{ $attributes->class('chip--user') }}
        {{ $attributes->merge(['style' => 'background-image: '.$user->group->effect.';'.$style]) }}
    >
        <a
            class="chip--user__link {{ $user->group->icon }}"
            href="{{ route('users.show', ['username' => $user->username]) }}"
            style="color: {{ $user->group->color }}"
            title="{{ $user->group->name }}"
        >
            {{ $user->username }}
        </a>
        {{ $appendedIcons }}
    </span>
@endif
