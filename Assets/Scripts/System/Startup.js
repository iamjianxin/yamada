#pragma strict

var skin : GUISkin;

function Start() {
#if UNITY_IPHONE
    Social.localUser.Authenticate(function(result : boolean){});
#endif

    Screen.sleepTimeout = SleepTimeout.NeverSleep;

    // Set the fintering mode of the GUI font to point-sampling.
    //   (I know that this should be set in build time,
    //   but somehow it can't. So I do this here...)
    skin.font.material.mainTexture.filterMode = FilterMode.Point;

    Application.LoadLevel(1);
}
