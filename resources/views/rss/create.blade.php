@extends('layout.default')

@section('title')
    <title>{{ __('rss.create-private-feed') }} - {{ config('other.title') }}</title>
@endsection

@section('breadcrumbs')
    <li class="breadcrumbV2">
        <a href="{{ route('rss.index') }}" class="breadcrumb__link">
            {{ __('rss.rss') }}
        </a>
    </li>
    <li class="breadcrumb--active">
        {{ __('common.new-adj') }}
    </li>
@endsection

@section('content')
    <div class="container">
        <h1 class="upload-title">{{ __('rss.create-private-feed') }}</h1>
        <form role="form" method="POST" action="{{ route('rss.store') }}">
            @csrf
            <div class="block">
                <div class="upload col-md-12">
                    <div class="form-group">
                        <label for="name">{{ __('rss.feed') }} {{ __('rss.name') }}</label>
                        <input type="text" id="name" name="name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="search">{{ __('torrent.torrent') }} {{ __('torrent.name') }}</label>
                        <input type="text" class="form-control" id="search" name="search"
                               placeholder="{{ __('torrent.torrent') }} {{ __('torrent.name') }}">
                    </div>
                    <div class="form-group">
                        <label for="description">{{ __('torrent.torrent') }} {{ __('torrent.description') }}</label>
                        <input type="text" class="form-control" id="description" name="description"
                               placeholder="{{ __('torrent.torrent') }} {{ __('torrent.description') }}">
                    </div>
                    <div class="form-group">
                        <label for="uploader">{{ __('torrent.torrent') }} {{ __('torrent.uploader') }}</label>
                        <input type="text" class="form-control" id="uploader" name="uploader"
                               placeholder="{{ __('torrent.torrent') }} {{ __('torrent.uploader') }}">
                    </div>

                    <div class="form-group">
                        <label for="imdb">IMDB ID</label>
                        <input type="text" class="form-control" id="imdb" name="imdb" placeholder="IMDB #">
                        <label for="tvdb">TVDB ID</label><input type="text" class="form-control" id="tvdb" name="tvdb"
                                                                placeholder="TVDB #">
                        <label for="tmdb">TMDB ID</label><input type="text" class="form-control" id="tmdb" name="tmdb"
                                                                placeholder="TMDB #">
                        <label for="mal">MAL ID</label><input type="text" class="form-control" id="mal" name="mal"
                                                              placeholder="MAL #">
                    </div>

                    <div class="form-group">
                        <label for="category">{{ __('torrent.category') }}</label>
                        <div>
                            @foreach ($categories as $category)
                                <span class="badge-user">
                                    <label class="inline">
                                        <input type="checkbox" id="{{ $category->name }}" name="categories[]"
                                               value="{{ $category->id }}" class="category">
                                        {{ $category->name }}
                                    </label>
                                </span>
                            @endforeach
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="type">{{ __('torrent.type') }}</label>
                        <div>
                            @foreach ($types as $type)
                                <span class="badge-user">
                                    <label class="inline">
                                        <input type="checkbox" id="{{ $type->name }}" name="types[]"
                                               value="{{ $type->id }}" class="type">
                                        {{ $type->name }}
                                    </label>
                                </span>
                            @endforeach
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="resolution">{{ __('torrent.resolution') }}</label>
                        <div>
                            @foreach ($resolutions as $resolution)
                                <span class="badge-user">
                                    <label class="inline">
                                        <input type="checkbox" id="{{ $resolution->name }}"
                                               value="{{ $resolution->id }}" class="resolution" name="resolutions[]">
                                        {{ $resolution->name }}
                                    </label>
                                </span>
                            @endforeach
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="genre">{{ __('torrent.genre') }}</label>
                        <div>
                            @foreach ($genres as $genre)
                                <span class="badge-user">
                                    <label class="inline">
                                        <input type="checkbox" id="{{ $genre->name }}" name="genres[]"
                                               value="{{ $genre->id }}" class="genre">
                                        {{ $genre->name }}
                                    </label>
                                </span>
                            @endforeach
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="type">{{ __('torrent.discounts') }}</label>
                        <div>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="freeleech" name="freeleech" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-star text-gold"></span>
                                    {{ __('torrent.freeleech') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="doubleupload" name="doubleupload" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-gem text-green"></span>
                                    {{ __('torrent.double-upload') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="featured" name="featured" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-certificate text-pink"></span>
                                    {{ __('torrent.featured') }}
                                </label>
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="type">{{ __('torrent.special') }}</label>
                        <div>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="stream" name="stream" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-play text-red"></span>
                                    {{ __('torrent.stream-optimized') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="highspeed" name="highspeed" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-tachometer text-red"></span>
                                    {{ __('common.high-speeds') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="sd" name="sd" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-ticket text-orange"></span>
                                    {{ __('torrent.sd-content') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="internal" name="internal" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-magic"
                                            style="color: #baaf92;"></span>
                                    {{ __('torrent.internal') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="personalrelease" name="personalrelease" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-user-plus"
                                            style="color: #865be9;"></span>
                                    {{ __('torrent.personal-release') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="bookmark" name="bookmark" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-bookmark text-blue"></span>
                                    {{ __('torrent.bookmark') }}
                                </label>
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="type">{{ __('torrent.health') }}</label>
                        <div>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="alive" name="alive" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-smile text-green"></span>
                                    {{ __('torrent.alive') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="dying" name="dying" value="1"> <span
                                            class="{{ config('other.font-awesome') }} fa-meh text-orange"></span>
                                    {{ __('torrent.dying-torrent') }}
                                </label>
                            </span>
                            <span class="badge-user">
                                <label class="inline">
                                    <input type="checkbox" id="dead" name="dead" value="0"> <span
                                            class="{{ config('other.font-awesome') }} fa-frown text-red"></span>
                                    {{ __('torrent.dead-torrent') }}
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
                <br>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">{{ __('common.create') }}</button>
                </div>
            </div>
        </form>
    </div>
@endsection
